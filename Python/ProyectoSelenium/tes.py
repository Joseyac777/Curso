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
        cine = driver.find_elements_by_id('CineMenu')
        cine.click()
        time.sleep(13)


    @classmethod    
    def tearDown(self):
        self.driver.close()
        
if __name__ == '__main__':
    unittest.main()
