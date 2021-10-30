import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from pyunitreport import HTMLTestRunner
import time 

class usingUnistate(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
        
    def testTexto(self):
        driver = self.driver
        driver.get("http://127.0.0.1:5500/JavaScript/ProyectoMenu/index.html#")
        driver.maximize_window()
        time.sleep(3)
        
        restaurante = driver.find_element_by_xpath('/html/body/div[1]/ul/li[3]/a')
        restaurante.click()
        time.sleep(3)
        
        seleccion = driver.find_element_by_xpath('//*[@id="tipo"]')
        seleccion.click()
        time.sleep(3)
        
        mesa2 = driver.find_element_by_xpath('//*[@id="tipo"]/option[2]')
        mesa2.click()
        time.sleep(3)
        
        nombre = driver.find_element_by_id('nombreRes')
        nombre.send_keys('Prueba tes')
        time.sleep(2)
        
        dpi = driver.find_element_by_id('dpiRes')
        dpi.send_keys('123123123')
        time.sleep(2)
        
        temp = driver.find_element_by_id('valorRes')
        temp.send_keys("30")
        time.sleep(3)
        
        boton = driver.find_element_by_xpath('//*[@id="forma"]/div/div[2]/div/button')
        boton.click()
        time.sleep(3)
        
def tearDown(self):
    self.driver.close()
        
if __name__ == '__main__':
   unittest.main(verbosity= 2, testRunner= HTMLTestRunner(output= "reportes", report_name= "Tes Restaurante"))
