"use client";

import { useState } from "react";
import Selector from "../selector";

enum Building {
	Birdseye = '俯瞰図',
	Junior = '中学棟',
	Senior = '高校棟',
	Kofu = '興風館・理科棟',
}

export default function Floormap() {

	const [building, setBuilding] = useState<number>(0);

	return (
		<div>

			<Selector
				items={Object.values(Building)}
				state={[building, setBuilding]}
			/>

			<p>
				マップは現在準備中です。しばらくお待ちください。
			</p>

		</div>
	);

}
