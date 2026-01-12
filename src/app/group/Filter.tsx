"use client";

import Selector, { SelectorGroup } from "@/components/selector";
import { useState } from "react";

enum MethodCategory {
	OFFLINE = '会場',
	ONLINE = 'オンライン',
};

enum GroupCategory {
	ALL = 'すべての団体',
	CLUB = '部活動・同好会',
	COMMITTEE = '学芸大会実行委員会',
	VOLUNTEER = '有志団体',
};

export function GroupFilter() {

	const [methodCategory, setMethodCategory] = useState<number>(0);
	const [groupCategory, setGroupCategory] = useState<number>(0);

	return (
		<div
			style={{
				width: "300px",
			}}
		>

			<SelectorGroup>

				<Selector
					title="団体カテゴリ"
					vertical
					items={Object.values(GroupCategory)}
					state={[groupCategory, setGroupCategory]}
				/>

				<Selector
					title="参加方法"
					vertical
					items={Object.values(MethodCategory)}
					state={[methodCategory, setMethodCategory]}
					backgrounds={
						[
							"var(--theme-common-weak1-foreground)",
							"var(--theme-common-weak1-foreground)",
						]
					}
				/>

			</SelectorGroup>

		</div>
	)

}
