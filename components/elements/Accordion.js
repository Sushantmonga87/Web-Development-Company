import React, { useState } from 'react';

const Accordion = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false, 
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>


            <ul className="accordion-box wow fadeInRight">
                {/*Block*/}
                <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>Interdum et malesuada fames ac ante ipsum
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>Maecenas condimentum sollicitudin ligula,
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>Duis rhoncus orci ut metus rhoncus
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                {/* <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>How can i find my solutions?
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>
                        </div>
                    </div>
                </li> */}
            </ul>
        </>
    );
};

export default Accordion;