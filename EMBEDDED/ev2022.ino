#define A 2
#define B 3
#define C 4
#define D 5


void setup() 
{
  for(int i=2;i<=13;i++){
    pinMode(i,OUTPUT);
    digitalWrite(i,HIGH);
  }
    Serial.begin(9600); // Set the baud rate to 9600
     
}
void loop() 
{
    char readData[12]={};//The character array is used as buffer to read into.
    int x = Serial.readBytes(readData,12);//It require two things, variable name to read into, number of bytes to read.
    //display number of character received in readData variable.
//    Serial.println(readData);//send back the 10 bytes of data.
    if(x==12)
    for(int i=2;i<=13;i++){
      Serial.print(readData[i-2]);
      if(readData[i-2]=='L')
        digitalWrite(i,LOW);
      else if(readData[i-2]=='H')
        digitalWrite(i,HIGH);
    }
}   
