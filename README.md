# Smart-TMS

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


