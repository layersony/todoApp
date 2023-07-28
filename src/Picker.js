import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const groups = [
    {option: 'Group A'},
    {option: 'Group B'},
    {option: 'Group C'},
    {option: 'Group D'},
    {option: 'Group E'},
    {option: 'Group F'},
    {option: 'Group G'},
    {option: 'Group H'},
    {option: 'Group I'},
    {option: 'Group J'}
]

function Picker(){
	const [mustSpin, setMustSpin] = useState(false)
	const [prizeNumber, setPrizeNumber] = useState(0)

  const getRandomGroup = () => {
    const randomIndex = Math.floor(Math.random() * groups.length);
    return groups[randomIndex].option
  };

  const startSpin = () => {
		setMustSpin(false)
  };

	const handleSpinCheck = ()=>{
		if (!mustSpin){
			const newPrizeNumber = Math.floor(Math.random() * groups.length)
			setPrizeNumber(newPrizeNumber)
			setMustSpin(true)
		}
	}

  return (
    <div>
      <Wheel 
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={groups}
        onStopSpinning={startSpin}
        backgroundColors={["#FF4500", "#5652b2","#FF6347", "#133337", "#371333", "#333713"]}
        textColors={["#ffffff"]}
        radiusLineColor={"#ffffff"}
      />
      <button onClick={handleSpinCheck}>Spin</button>
    </div>
  );
};

export default Picker;
