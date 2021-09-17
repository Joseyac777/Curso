import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import time 

class usingUnistate(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
        
    def testTexto(self):
        driver = self.driver
        driver.get("https://portal.sat.gob.gt/portal/")
        driver.maximize_window()
        
        
        
        time.sleep(3)
        
def tearDown(self):
        self.driver.close()
        
if __name__ == '__main__':
    unittest.main()