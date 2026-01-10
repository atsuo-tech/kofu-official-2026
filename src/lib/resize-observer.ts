import { RefObject, useLayoutEffect, useState } from "react";

export function useResizeObserver(ref: RefObject<HTMLElement | null>) {

	const [rect, setRect] = useState<DOMRectReadOnly | null>(null);

	useLayoutEffect(() => {

		if (!ref.current) return;

		const observer = new ResizeObserver(([entry]) => {
			setRect(entry.contentRect);
		});

		observer.observe(ref.current);

		return () => observer.disconnect();

	}, [setRect, ref]);

	return rect;

}
