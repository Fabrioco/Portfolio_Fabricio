import picture from "./Resources/picture me.jpeg"

function Sobre() {
    return(
        <div id="about">
            <div>
                <h2>Saiba mais sobre mim</h2>
                <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
            </div>
            <div>
                <img src={picture} />
            </div>
        </div>
    )
}

export default Sobre;