import React from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import "./Statement.css"

const Statement = () => {
  return (
    <>
    <div className="statementMain">
        <div className="statementHeader">
            <h1>Our Proven Success in Commercial Landscaping</h1>
        </div>
        <div className="statementText">
            <p>Our portfolio showcases a diverse array of commercial landscaping projects, each thoughtfully tailored to meet the unique needs of our clients. Guided by industry expert Jon Boggs—whose extensive knowledge of desert landscaping ensures exceptional results—we bring dedication, reliability, and peace of mind to every project. In partnership with trusted professionals, we take pride in delivering beautifully crafted, enduring landscapes throughout Arizona.</p>
        </div>
<ImageCarousel /> 
    </div>
    </>
  )
}

export default Statement
