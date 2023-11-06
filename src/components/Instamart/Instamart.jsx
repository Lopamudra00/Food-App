import React, { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2" >
            <h3 className="font-bold text-xl" >{title}
            </h3>
            {isVisible ? (
                <button
                    onClick={() =>
                        setIsVisible(false)
                    }
                    className="cursor-pointer m-2 h-8 w-16 border rounded" >Hide</button>

            ) :
                <button
                    onClick={() =>
                        setIsVisible(true)
                    }
                    className="m-2 h-8 w-16 cursor-pointer border rounded" >Show</button>
            }
            {isVisible && <p> {description}</p>}



        </div>
    )
}
const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");
    // const [sectionConfig, setSectionConfig] = useState({
    //     showAbout: true,
    //     showTeam: false,
    //     showCareers: true,
    // })
    return (
        <div>
            <h1>This is Instamart</h1>
            <Section
                title={"About Instamart"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={visibleSection === "about"}
                setIsVisible={() => {
                    setVisibleSection("about")
                }}
            />

            <Section
                title={"Team Instamart"}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                isVisible={visibleSection === "team"}
                setIsVisible={() => {
                    setVisibleSection("team")
                }}


            />

            <Section
                title={"Careers"}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                isVisible={visibleSection === "career"}
                setIsVisible={() => {
                    setVisibleSection("career")
                }}
            />
        </div>
    )
}
export default Instamart;