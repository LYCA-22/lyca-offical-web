"use client";

import { useEffect, useRef, useState } from "react";

export function MouseFollower() {
  const mouseFollower = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (mouseFollower.current) {
        mouseFollower.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }

      // 檢查滑鼠下方的元素
      const elementUnderMouse = document.elementFromPoint(
        event.clientX,
        event.clientY,
      );
      const isClickable = isClickableElement(elementUnderMouse);
      setIsHovering(isClickable);
    };

    const isClickableElement = (element: Element | null): boolean => {
      if (!element) return false;

      // 檢查是否為可點擊的元素
      const clickableSelectors = [
        "button",
        "a",
        'input[type="button"]',
        'input[type="submit"]',
        'input[type="reset"]',
        '[role="button"]',
        "[onclick]",
        "select",
        "textarea",
        "input",
        '[tabindex]:not([tabindex="-1"])',
      ];

      // 檢查元素本身或其父元素是否為可點擊的
      let currentElement: Element | null = element;
      while (currentElement) {
        // 檢查是否匹配可點擊的選擇器
        for (const selector of clickableSelectors) {
          if (currentElement.matches(selector)) {
            return true;
          }
        }

        // 檢查是否有 cursor: pointer 樣式
        const computedStyle = window.getComputedStyle(currentElement);
        if (computedStyle.cursor === "pointer") {
          return true;
        }

        // 檢查是否有點擊事件監聽器（通過常見的 class 判斷）
        if (
          currentElement.classList.contains("cursor-pointer") ||
          currentElement.classList.contains("clickable") ||
          currentElement.classList.contains("hover:")
        ) {
          return true;
        }

        currentElement = currentElement.parentElement;
      }

      return false;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mouseFollower}
      className={`pointer-events-none fixed z-[600] transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-200 ease-out ${
        isHovering
          ? "w-10 h-10 rounded-full bg-amber-500"
          : "w-5 h-5 rounded-none bg-pink-400"
      }`}
    ></div>
  );
}
