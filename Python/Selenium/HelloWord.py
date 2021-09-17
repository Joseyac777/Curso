from selenium import webdriver

driver = webdriver.Chrome(executable_path=r"C:\dChrome\chromedriver.exe")
driver.get("https://python.org")
driver.close()
