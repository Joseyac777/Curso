from selenium import webdriver
from selenium.webdriver.common.keys import Keys 
from pyunitreport import HTMLTestRunner
import time 
import unittest

class HelloWord(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
        driver = cls.driver
        driver.implicitly_wait(10)

    def test_git(self):
        driver = self.driver
        driver.get("https://github.com/login")

        usuario = driver.find_element_by_id("login_field")
        usuario.send_keys("joseyp75@gmail.com")
        #usuario.send_keys(Keys.ENTER)
        time.sleep(3)

        clave = driver.find_element_by_id("password")
        clave.send_keys("contraseñafalsa")
        clave.send_keys(Keys.ENTER)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

if __name__ == "__main__":
    unittest.main(verbosity= 2, testRunner= HTMLTestRunner(output= "reportes", report_name= "PruebaGit"))
