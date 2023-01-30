import React from "react";

const NoContent = () => {
    return (
        <section className="p-strip">
            <div className="row">
                <div className="col-6 col-medium-3 u-vertically-center u-align--center">
                    <img
                        src="https://imgs.search.brave.com/1L91_VC9h4B_z1uuWywOHQNWRXGMyNUsGW0qM_vH_3M/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9lcnJvci1pY29u/LXZlY3Rvci1pbGx1/c3RyYXRpb24tdmVj/dG9yLWlkOTIyMDI0/MjI0P2s9NiZtPTky/MjAyNDIyNCZzPTYx/Mng2MTImdz0wJmg9/TFhsOFVsN2JyaWE2/YXVBWEtJamx2YjZo/UkhrQW9kVHF5cUJl/QTZLN1I1ND0"
                        alt="Content not found"
                        width="360"
                        height="365"
                    />
                </div>
                <div className="col-6 col-medium-3 u-vertically-center">
                    <div>
                        <h1>Not Found</h1>
                        <p className="p-heading--4">
                            Sorry, we couldn’t find any content for this
                            category.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NoContent;
