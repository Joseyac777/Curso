import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys 
from pyunitreport import HTMLTestRunner
import time 

class homePagesTest(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
        driver = self.driver
        driver.get("http://demo-store.seleniumacademy.com/")
        driver.maximize_window()
        
    def test_search_text_field(self):
        search_field = self.driver.find_element_by_id("search")
        search_field.send_keys("tori")
        search_field.send_keys(Keys.ENTER)
        time.sleep(5)

        search_detail = self.driver.find_element_by_class_name("button")
        search_detail.send_keys(Keys.ENTER)
        time.sleep(5)

    
    def tearDown(self):
        self.driver.quit()
        
if __name__ == "__main__":
    unittest.main(verbosity= 2)
    #unittest.main(verbosity= 2, testRunner= HTMLTestRunner(output= "reportes", report_name= "ReporteTestElement"))
    
