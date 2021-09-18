import unittest
from selenium import webdriver
from pyunitreport import HTMLTestRunner
from selenium.webdriver.common.keys import Keys
import time 

class usingUnistate(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
        
    def testTexto(self):
        driver = self.driver
        driver.get("https://portal.sat.gob.gt/portal/")
        driver.maximize_window()
        
        Serch = driver.find_element_by_xpath('//*[@id="page"]/div[1]/header/div/div[4]/div[2]/form/input[1]')
        Serch.send_keys("vehiculos")
        Serch.send_keys(Keys.ENTER)
        time.sleep(5)
        
        ButtonVehiculo = driver.find_element_by_xpath('//*[@id="content"]/div/article[2]/div/a')
        self.assertTrue(ButtonVehiculo.is_displayed() and ButtonVehiculo.is_enabled())
        ButtonVehiculo.click()
        time.sleep(3)
        
        ButtonPerInd = driver.find_element_by_xpath('//*[@id="1524835532161-47ceaa89-b60a"]/div[1]/h4/a')
        self.assertTrue(ButtonPerInd.is_displayed() and ButtonPerInd.is_enabled())
        ButtonPerInd.click()
        time.sleep(3)
        
def tearDown(self):
        self.driver.close()
        
if __name__ == '__main__':
    unittest.main(verbosity= 2, testRunner= HTMLTestRunner(output= "reportes", report_name= "Tes Sat"))