import React from "react";

function Accordian({ item, i, toggle, selected }) {
	return (
		<>
			<div className='item'>
				<div className='title' onClick={() => toggle(i)}>
					<h2>{item.question}</h2>
					<span>{selected === i ? "-" : "+"}</span>
				</div>
				<div className={selected === i ? "content show" : "content"}>
					{item.answer}
				</div>
			</div>
		</>
	);
}

export default Accordian;
