#define T_SALIDA 13
#define E_SALIDA 10
#define T_ENTRADA 9
#define E_ENTRADA 8
#define S_ENTRADA 6
#define S_SALIDA 7

#include <LiquidCrystal.h>
#include <Servo.h>


float sonido = 34300.0;
int dentro = 0;
bool entrando = false;
bool saliendo = false;
bool entroOSalio = false;
int segundosEntrando = 0;
int segundosSaliendo = 0;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
Servo servoEntrada;
Servo servoSalida;


void setup() {
  lcd.begin(16, 2);
  servoEntrada.attach(S_ENTRADA);
  servoSalida.attach(S_SALIDA);
  servoEntrada.write(0);
  servoSalida.write(0);
  pinMode(T_ENTRADA,OUTPUT);
  pinMode(T_SALIDA,OUTPUT);
  pinMode(E_ENTRADA,INPUT);
  pinMode(E_SALIDA,INPUT);
}

void loop() {
  digitalWrite(T_ENTRADA,HIGH);
  delayMicroseconds(1);
  digitalWrite(T_ENTRADA,LOW);
  
  long tiempoEntrada = pulseIn(E_ENTRADA,HIGH);
  int distanciaEntrada = tiempoEntrada * 0.000001 * sonido / 2.0;
  
  digitalWrite(T_SALIDA,HIGH);
  delayMicroseconds(1);
  digitalWrite(T_SALIDA,LOW);
  
  long tiempoSalida = pulseIn(E_SALIDA,HIGH);
  int distanciaSalida = tiempoSalida * 0.000001 * sonido / 2.0;
  
  if(distanciaEntrada > 25 && distanciaEntrada < 90 && entrando == false && dentro < 5){
    entrando = true;
    servoEntrada.write(90);
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("BIENVENIDO");
    lcd.setCursor(0,1);
    lcd.print("ENTRANDO ");
    lcd.setCursor(8,1);
    segundosEntrando = segundosEntrando + 1;
  }
  else{
    if(distanciaEntrada > 25 && distanciaEntrada < 90 && entrando == true){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("BIENVENIDO");
      lcd.setCursor(0,1);
      lcd.print("ENTRANDO ");
      lcd.setCursor(8,1);
      segundosEntrando = segundosEntrando + 1;
    }
    if(dentro == 5 && distanciaEntrada > 25 && distanciaEntrada < 90){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("  BIENVENIDO");
      lcd.setCursor(0,1);
      lcd.print(" PARQUEO LLENO");
    }
  }
  
  if(distanciaEntrada < 25 && entrando == true && dentro < 5){ //|| distanciaEntrada > 90
    servoEntrada.write(0);
    dentro = dentro + 1;
    entrando = false;
    entroOSalio = true;
    segundosEntrando = 0;
  }
  
  if(distanciaSalida > 75 && distanciaSalida < 170 && saliendo == false && dentro > 0){
    saliendo = true;
    servoSalida.write(90);
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("BUEN VIAJE");
    lcd.setCursor(0,1);
    lcd.print("SALIENDO ");
    lcd.setCursor(8,1);
    segundosSaliendo = segundosSaliendo + 1;
  }
  else{
    if(distanciaSalida > 55 && distanciaSalida < 170 && saliendo == true){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("BUEN VIAJE");
      lcd.setCursor(0,1);
      lcd.print("SALIENDO ");
      lcd.setCursor(8,1);
      segundosSaliendo = segundosSaliendo + 1;
    }
    if(dentro <= 0 && distanciaSalida > 25 && distanciaSalida < 170){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("ESPACIO DISP");      
    }
  }
  
  if(distanciaSalida > 200  && saliendo == true && dentro > 0){ //|| distanciaSalida < 120
    servoSalida.write(0);
    dentro = dentro - 1;
    saliendo = false;
    entroOSalio = true;
    segundosSaliendo = 0;
  }
  
  if(entroOSalio == true){
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("AUTOS DENTRO:");
    lcd.setCursor(0,1);
    lcd.print(dentro);
    entroOSalio = false;
  }
  
  
  delay(800);
  
}