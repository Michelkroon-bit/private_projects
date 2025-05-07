import pywhatkit as kit
import time
import random
import pyautogui


def send_Msg(phone_number , message , hours , minute):
    kit.sendwhatmsg(phone_number, message, hours , minute) 
    time.sleep(5)
    pyautogui.hotkey('ctrl', 'w')
    pyautogui.hotkey('alt', 'tab')

RANDOM_ARRAY_WITH_WORD = ["⚠️ SYSTEM WARNING ⚠️ This message has been automatically generated. Your system has been flagged as a target of a Python-operated surveillance protocol. Immediate response is required. Failure to comply may result in escalation. Proceed with caution." ]




a=0
while(a < 10):
    current_time = time.localtime()
    hour = current_time.tm_hour
    minute = current_time.tm_min+2
    send_Msg("+31623029011" ,random.choice(RANDOM_ARRAY_WITH_WORD)  , hour , minute)
    a+=1
    time.sleep(10)
    
#31626020927