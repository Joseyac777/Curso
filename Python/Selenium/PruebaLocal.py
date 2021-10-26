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
        driver.get("http://127.0.0.1:5500/HTML/Formulario.html")
        driver.maximize_window()

        Nombre = driver.find_element_by_id('nombre')
        Nombre.send_keys('Jose')
        time.sleep(3)
        
        Apellido = driver.find_element_by_id('apellido')
        Apellido.send_keys('Yac')
        time.sleep(3)
        
        Correo = driver.find_element_by_id('email')
        Correo.send_keys('Jose@gmail.com')
        time.sleep(3)
        
        Edad = driver.find_element_by_id('edad')
        Edad.send_keys('21')
        time.sleep(3)
        
        Password = driver.find_element_by_id('password')
        Password.send_keys('123')
        time.sleep(3)
        
        Comentario = driver.find_element_by_id('comentario')
        Comentario.send_keys('Esto es un comentario desde selenium')
        time.sleep(3)
        
        Genero = driver.find_element_by_id('masculino')
        Genero.click()
        time.sleep(3)
        
        Musica = driver.find_element_by_id('banda')
        Musica.click()
        time.sleep(3)
        
        Autos = driver.find_element_by_id('autos')
        Autos.click()
        vol = driver.find_element_by_id('volv')
        vol.click()
        time.sleep(3)
        
        # Boton = driver.find_element_by_id('enviar')
        # Boton.click()
        # time.sleep(3)
        
           
    @classmethod    
    def tearDown(self):
        self.driver.close()
        
if __name__ == '__main__':
    unittest.main()

# http://127.0.0.1:5500/HTML/Formulario.html

# ButtonPerInd = driver.find_element_by_xpath('//*[@id="1524835532161-47ceaa89-b60a"]/div[1]/h4/a')
#         self.assertTrue(ButtonPerInd.is_displayed() and ButtonPerInd.is_enabled())
#         ButtonPerInd.click()
#         time.sleep(3)