import React, { useEffect, useState } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

import "./Testmonial.scss";

const Testmonial = () => {
  const [brands, setBrands] = useState([]);
  const [testmonials, setTestmonials] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandquery = '*[_type == "brands"]';
    client.fetch(query).then((data) => {
      setTestmonials(data);
    });

    client.fetch(brandquery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testmonials.length && (
        <>
          {/* <div className="app__testmonial-item app__flex">
          <img src={urlFor(testmonials[currentIndex].imgurl)} alt={testmonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testmonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testmonials[currentIndex].name}</h4>
                <h5 className="p-text">{testmonials[currentIndex].company}</h5>
              </div>
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default Testmonial;
