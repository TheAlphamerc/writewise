import React from "react";

export default function StartDotPattern({
  Children,
}: {
  Children: React.ReactNode;
}) {
  const pattern = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='33' height='33'%3E%3Cpath d='M0 0h2.25Zm0 0v2.25Zm33 33h-2.25Zm0 0v-2.25Zm0-33h-2.25Zm0 0v2.25ZM0 33v-2.25Zm0 0h2.25Z' stroke-opacity='.065' stroke-width='1.1' stroke='%23000'/%3E%3C/svg%3E")`;
  return (
    <div className="StartDotPattern" style={{ backgroundImage: pattern }}>
      {Children}
    </div>
  );
}
