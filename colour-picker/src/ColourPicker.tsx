import { useState } from "react";
import "./ColourPicker.css"
const ColourPicker = () => {
    type Color = {
        name: string;
        hex: string;
    }
    const [selectedColour, setSelectedColour] = useState<Color | null>(null);
    // const [focusedIndex, setFocusedIndex] = useState();
    const [textInBox, setTextInBox] = useState<string>("");
    const colors: Color[] = [
        { name: "Crimson Red", hex: "#DC143C" },
        { name: "Emerald Green", hex: "#50C878" },
        { name: "Royal Blue", hex: "#4169E1" },
        { name: "Sunflower Yellow", hex: "#FFC312" },
        { name: "Aqua Blue", hex: "#00FFFF" },
        { name: "Electric Purple", hex: "#BF00FF" },
        { name: "Coral Pink", hex: "#FF6F61" },
        { name: "Midnight Navy", hex: "#2C3E50" },
        { name: "Mint Green", hex: "#98FF98" },
        { name: "Lavender", hex: "#E6E6FA" },
        { name: "Tangerine", hex: "#F28500" },
        { name: "Turquoise", hex: "#40E0D0" },
        { name: "Peach", hex: "#FFDAB9" },
        { name: "Teal", hex: "#008080" },
        { name: "Rose Gold", hex: "#B76E79" },
        { name: "Charcoal", hex: "#36454F" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Plum", hex: "#8E4585" },
        { name: "Olive", hex: "#808000" },
        { name: "Blush", hex: "#DE5D83" },
        { name: "Slate Blue", hex: "#6A5ACD" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Periwinkle", hex: "#CCCCFF" },
        { name: "Seafoam", hex: "#9FE2BF" },
        { name: "Amber", hex: "#FFBF00" },
        { name: "Mulberry", hex: "#70193D" },
        { name: "Pistachio", hex: "#93C572" },
        { name: "Steel Blue", hex: "#4682B4" },
        { name: "Dusty Rose", hex: "#C08081" },
        { name: "Ice Blue", hex: "#99FFFF" },
        { name: "Forest Green", hex: "#228B22" },
        { name: "Burnt Orange", hex: "#CC5500" },
        { name: "Indigo", hex: "#4B0082" },
        { name: "Cool Gray", hex: "#8C92AC" },
        { name: "Cerulean", hex: "#007BA7" },
        { name: "Bubblegum Pink", hex: "#FF69B4" },
        { name: "Lemon", hex: "#FFF44F" },
        { name: "Fuchsia", hex: "#FF00FF" },
        { name: "Graphite", hex: "#1F1F1F" },
        { name: "Ivory", hex: "#FFFFF0" }
    ];
    const mouseEnter = (color: Color) => {
        setSelectedColour(color);
        // setBgColor("#4A4C48");
        setTextInBox(color.name);
    }
    const setColor = (color: Color) => {
        setTextInBox(color.hex);

        if (navigator.clipboard) {
            return navigator.clipboard.writeText(selectedColour?.hex || color.hex);
        }

    }
    const mouseLeave = () => {
        setSelectedColour(null);
        // setBgColor("");
        setTextInBox("");
    }
    return (
        <div className="parent-div">
            <div className="colour-picker"
            >
                {colors.map((color: any, index) => {
                    return (
                        <div key={index}
                            className="colour-swatch polaroid"
                            style={{ backgroundColor: color.hex }}
                            onMouseEnter={() => { mouseEnter(color) }}
                            onMouseLeave={() => { mouseLeave() }}
                            onClick={() => { setColor(color) }}

                        >
                            {selectedColour?.hex === color.hex && (
                                <span className="colour-code">
                                    {textInBox}
                                </span>
                            )}
                        </div>
                    )
                })}

            </div>
        </div>
    )

}

export default ColourPicker;