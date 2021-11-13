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
        
        cine = driver.find_element_by_xpath('/html/body/div[1]/ul/li[2]/a')
        cine.click()
        time.sleep(3)

        seleccion = driver.find_element_by_xpath('//*[@id="tipo"]')
        seleccion.click()
        time.sleep(3)
        
        salaC = driver.find_element_by_xpath('//*[@id="tipo"]/option[3]')
        salaC.click()
        time.sleep(4)
        
        nombre = driver.find_element_by_id('nombre')
        nombre.send_keys("jose yac")
        time.sleep(3)
        
        dpi = driver.find_element_by_id('dpi')
        dpi.send_keys("123234345")
        time.sleep(3)
        
        temp = driver.find_element_by_id('valor')
        temp.send_keys("30")
        time.sleep(3)
        
        boton = driver.find_element_by_xpath('//*[@id="forma"]/div/div[2]/div/button')
        boton.click()
        time.sleep(3)
           
def tearDown(self):
    self.driver.close()
        
if __name__ == '__main__':
   unittest.main(verbosity= 2, testRunner= HTMLTestRunner(output= "reportes", report_name= "Tes Cine"))
