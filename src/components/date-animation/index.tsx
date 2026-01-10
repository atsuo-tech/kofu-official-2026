"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DateAnimation() {

	const [count, setCount] = useState(0);

	return (
		<span
			key={count}
			onClick={() => setCount(count + 1)}
		>
			{
				[
					"10", "/3", "Sat.", " ▶▶ ", "/4", "Sun."
				].map((text, index) => (
					<motion.span
						key={index}
						style={{ display: "inline-block" }}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							delay: index * 0.05,
							type: "spring",
							stiffness: 300,
							damping: 20,
						}}
					>
						{text}
					</motion.span>
				))
			}
		</span>
	)

}
