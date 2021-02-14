import React, { useState } from "react"
import {
	ToggleButton,
	ToggleButtonGroup,
} from "react-bootstrap"
import "../../style/mainStructure.scss"
import { motion } from "framer-motion"
import { pageAnimation } from "../partsOfScreen/animation"
import Description from "../partsOfScreen/description"
const Docs = () => {
	const [language, setLanguage] = useState("english")

	return (
		<motion.div
			className="pageContent"
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<ToggleButtonGroup
				type="radio"
				name="language"
				defaultValue={"english"}
				style={{
					marginTop: "1rem",
					marginBottom: "1rem",
				}}
			>
				<ToggleButton
					onClick={() => {
						setLanguage("english")
					}}
					value={"english"}
				>
					English
				</ToggleButton>
				<ToggleButton
					onClick={() => {
						setLanguage("czech")
					}}
					value={"czech"}
				>
					Czech
				</ToggleButton>
			</ToggleButtonGroup>

			<Description language={language} />
		</motion.div>
	)
}

export default Docs
