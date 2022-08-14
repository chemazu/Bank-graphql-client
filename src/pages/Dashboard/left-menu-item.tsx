import React from "react";

export default function LeftMenuItem({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className="left-menu-item">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
}
