import {Activity, useState} from 'react'

export default function App() {
	const [count, setCount] = useState<"one" | "two" | "three">("two");

	return (
		<>
			<p>👉 Click on the buttons to activate another "tab" and see what the browser title looks like</p>

			<button className={count==="one" ? "active" : undefined} onClick={() => setCount("one")}>One</button>
			<button className={count==="two" ? "active" : undefined} onClick={() => setCount("two")}>Two</button>
			<button className={count==="three" ? "active" : undefined} onClick={() => setCount("three")}>Three</button>


			<Activity mode={count === "one" ? "visible" : "hidden"}>
				<One/>
			</Activity>
			<Activity mode={count === "two" ? "visible" : "hidden"}>
				<Two/>
			</Activity>
			<Activity mode={count === "three" ? "visible" : "hidden"}>
				<Three/>
			</Activity>
		</>
	)
}

function One() {
	return <div>
		<title>One</title>
		One
	</div>
}

function Two() {
	return <div>
		<title>Two</title>
		Two
	</div>
}

function Three() {
	return <div>
		<title>Three</title>
		Three
	</div>
}

