import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time 

class usingUnistate(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
        
    def testTexto(self):
        driver = self.driver
        driver.get("http://demo-store.seleniumacademy.com/")
        driver.maximize_window()
        
        driver.find_element_by_xpath('/html/body/div/div[2]/header/div/div[2]/div/a/span[2]').click()
        driver.find_element_by_link_text('Log In').click()
        
        createButon = driver.find_element_by_xpath('//*[@id="login-form"]/div/div[1]/div[2]/a/span/span')
        self.assertTrue(createButon.is_displayed() and createButon.is_enabled())
        createButon.click()
        time.sleep(3)
        
        self.assertEqual('Create New Customer Account', driver.title)
        
        firstName = driver.find_element_by_id('firstname') 
        MiddleName = driver.find_element_by_id('middlename')
        LastName = driver.find_element_by_id('lastname')
        emailAddress = driver.find_element_by_id('email_address')
        password = driver.find_element_by_id('password')
        newLetter = driver.find_element_by_id('confirmation')
        
        subButon = driver.find_element_by_xpath('//*[@id="form-validate"]/div[2]/button/span/span')
        
        self.assertTrue(firstName.is_enabled()
                        and MiddleName.is_enabled()
                        and LastName.is_enabled()
                        and emailAddress.is_enabled()
                        and password.is_enabled()
                        and newLetter.is_enabled()
                        and subButon.is_enabled())
        
        firstName.send_keys('Jose')
        time.sleep(3)
        MiddleName.send_keys('Adolfo')
        time.sleep(3)
        LastName.send_keys('Yac')
        time.sleep(3)
        emailAddress.send_keys('joseyp75@gmail.com')
        time.sleep(3)
        password.send_keys('123456')
        time.sleep(3)
        newLetter.send_keys('123456')
        time.sleep(20)
        
        
        
    def tearDown(self):
        self.driver.close()
        
if __name__ == '__main__':
    unittest.main()
        