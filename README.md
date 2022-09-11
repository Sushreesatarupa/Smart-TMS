# Smart-TMS

![image](https://user-images.githubusercontent.com/64991656/189509524-7a67d27b-90ac-4d3b-9d64-89cbc956500d.png)
![image](https://user-images.githubusercontent.com/64991656/189509531-0224113a-66f7-4cfc-9428-74c78f44f1ed.png)
![image](https://user-images.githubusercontent.com/64991656/189509571-87d89f29-9ce4-4004-95a0-1fb52960decf.png)
![image](https://user-images.githubusercontent.com/64991656/189509679-8f7ce6a0-701a-4b2e-acd2-144c5efd363e.png)


## Introduction:

-	India’s electric vehicle (EV) enthusiasts are worried over several incidents involving two-wheelers bursting into flames. 
-	Some have attributed these fires to a combination of the rising temperatures in our cities and the poor thermal management system of the EV battery. 
-	But they are not true.
-	Instead, we should prefer looking more closely at how a lithium-ion (Li-ion) battery is packed and designed. 
-	An EV comprising lithium-ion (Li-ion) cells requires a few hundred degrees Celsius before suffering a ‘thermal runaway incident’ that causes EV fires. 
-	Extreme hot weather conditions and improper thermal management systems of the battery can negatively impact performance and shorten life, they do not cause fires. 
-	In recent times, most of the battery fires are due to short circuits leading to uncontrolled current. In this condition, the cells heat themselves beyond 100°C. 
-	Poor battery design causes short circuits, and the lack of a proper battery management system (BMS) is a condition in which cells are not managed properly with the right sensing and software technologies. 
-	We need a proper temperature measurement system sensor built in. Several manufacturers of Li-ion batteries ensure that they automatically switch off around 45-55 degrees Celsius. But we have come up with a better solution.
-	Our idea is to reduce the burning of EVs by building a smart Thermal Management System which predicts battery anomalies that may lead to battery failure by monitoring multiple temperature points over the battery pack.


## Our Model:

We know that resistance is a function of soc, id, and temperature. 
![image](https://user-images.githubusercontent.com/64991656/189504054-4b49f188-c908-48f8-8403-74c22944fe34.png)
So, we analyzed the datasets and modeled them to predict instantaneous internal resistance. 
From that, we calculate the power dissipated through batteries. 
The power dissipates in 2 ways. One uses convection, and the other goes to sensible heat that increases the temperature.  
From that, we get delta T, the difference between cell and ambient temperature.

After that, if our model detects any anomaly in a cell, it cutoffs the cell from the circuit. Now you may have the question, how? So, we are using multiple solid-state switches to do so. Now I shall demonstrate it with a prototype.






Properly working battery:
![image](https://user-images.githubusercontent.com/64991656/189504002-372fd3e2-e2b1-4d4c-8371-5e706d8aabf1.png)

Anamaly in a cell:
![image](https://user-images.githubusercontent.com/64991656/189504009-b53e2787-cb8d-461c-bb40-57fb07ff1454.png)

Cut off of the bad cell:
![image](https://user-images.githubusercontent.com/64991656/189503999-ed227b4e-5c7c-4be2-942b-325bef198941.png)

Our Hardware Prototype:
![image](https://user-images.githubusercontent.com/64991656/189504353-22ae7f94-6047-4546-9d84-a8346f8491e6.png)




## THERMAL

- Thermal runaway is one of the major phenomena that causes the burning of battery packs in EVs. 
- In our model, we have proposed to employ forced convection for thermally managing the abnormal temperature deviation in the cells. 
- The inlet volumetric rate of flow of compressed air is determined based on the heat generated in the battery pack. 
- Simulations are conducted on ANSYS fluent to depict the efficiency of employing this air cooling method. 
- We do not use any power source to drive the cooling technology. 
![image](https://user-images.githubusercontent.com/64991656/189510577-cd091d39-3684-4414-86ea-d78fead54179.png)



## Technologies we used:
- Python 
- Ansys CFD 
- Solidworks 
- Arduino 
- Matplotlib
- Scilab

## Features:
- ML model to isolate damaged cells and maintain an optimum temperature of the cells.
- Thermal Cooling features in the battery pack, for handling small temperature fluctuations.
- Improving safety and reducing mishaps.

## Post hackathon:
- Improvement of ML model for more accurate results after data collection.
- Optimizing the battery pack design to make it compact.

## Challenges we ran into:
- Unavailability of data related to electric vehicles and battery packs for ML modeling. 
- After lots of exploration, we were able to find research papers and we converted the graphs and lab-based data into datasets

## Conclusion

- Our concept ensures safety, but if we talk about drawbacks it lowers the vehicle performance.
- In comparion to battery packs currently available on the market, our model with temperature sensors and MOSFETs would cost just 8 percent more but will ensure safety. 
- For future work, we would improvise our AI model after collecting sufficient data for accurate modeling, optimizing accumulator design making it more compact. 
- Besides this, we have thought that sweeping jet actuators can be a promising technology in the thermal management of battery packs due to their ability to steer the jet in space.


References:

- https://www.sciencedirect.com/science/article/abs/pii/S2352152X22000111
- https://ieeexplore.ieee.org/document/9138778
-
-



