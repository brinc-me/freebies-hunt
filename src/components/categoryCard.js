import React from "react"
import { Link } from "gatsby"

import Icon from "./icon"

import { kebabCase, generateStyleObject } from "../scripts"

import "./categoryCard.scss"

const categoryCard = ({ name, mainColor, iconName }) => (
  <div key={name} className="category-card" tabIndex="1">
    <Link className="category-link" to={`/${kebabCase(name)}`}>
      <div className="category-image" style={Object.assign(generateStyleObject(mainColor))}>
        <Icon className="category-icon" file="category-icons" name={iconName} />
      </div>
      <div className="description">{name}</div>
    </Link>
  </div>
)

export default categoryCard
