import unittest
from selenium import webdriver
from pyunitreport import HTMLTestRunner
from selenium.webdriver.common.keys import Keys
import time 
from selenium.webdriver.common.action_chains import ActionChains

class usingUnistate(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
        
    def testTexto(self):
        driver = self.driver
        driver.get("https://portal.sat.gob.gt/portal/")
        driver.maximize_window()
        
        Serch = driver.find_element_by_xpath('//*[@id="page"]/div[1]/header/div/div[4]/div[2]/form/input[1]')
        Serch.send_keys("aduanas")
        Serch.send_keys(Keys.ENTER)
        time.sleep(5)
        
        ButtonAduana = driver.find_element_by_xpath('//*[@id="content"]/div/article[2]/div[2]/a')
        self.assertTrue(ButtonAduana.is_displayed() and ButtonAduana.is_enabled())
        ButtonAduana.click()
        
        #Dirijimos hacia el lugar donde queremos vajar
        elemnt = driver.find_element_by_xpath('//*[@id="post-48469"]/div[2]/div[2]/div/div/div/div[2]/div/p[2]')
        
        #Hacemos la accion sobrre el elemento que elegimos
        action = ActionChains(driver)
        action.move_to_element(elemnt).perform()
        time.sleep(5)
        
        
if __name__ == '__main__':
    unittest.main(verbosity= 2, testRunner= HTMLTestRunner(output= "reportes", report_name= "Tes Sat Tres"))