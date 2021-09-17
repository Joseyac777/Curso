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
        Serch.send_keys("software")
        Serch.send_keys(Keys.ENTER)
        time.sleep(5)
        
        ButtonSoftware = driver.find_element_by_xpath('//*[@id="content"]/div/article[1]/div/a')
        self.assertTrue(ButtonSoftware.is_displayed() and ButtonSoftware.is_enabled())
        ButtonSoftware.click()
        time.sleep(3)
        
        ButtonAsisHos = driver.find_element_by_xpath('//*[@id="1527108921719-ff0dd2b9-5f8c"]/div[2]/div/div/table/tbody/tr[3]/td[1]/span/a')
        self.assertTrue(ButtonAsisHos.is_displayed() and ButtonAsisHos.is_enabled())
        ButtonAsisHos.click()
        time.sleep(3)
        
        time.sleep(5)
def tearDown(self):
        self.driver.close()
        
if __name__ == '__main__':
    unittest.main(verbosity= 2, testRunner= HTMLTestRunner(output= "reportes", report_name= "Tes Sat"))