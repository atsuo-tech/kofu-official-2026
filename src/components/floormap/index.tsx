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
				items={['俯瞰図', '中学棟', '高校棟', '興風館・理科棟']}
				state={[building, setBuilding]}
				backgrounds={['var(--theme-common-accent-1)', 'var(--theme-common-accent-2)', 'var(--theme-common-accent-3)', 'var(--theme-common-accent-4)']}
			/>

			<p>
				マップは現在準備中です。しばらくお待ちください。
			</p>

		</div>
	);

}
