
from colorama import Fore, Back, Style
import random
import colorama


#Initialize colorama
colorama.init(autoreset=True)

aantal_fout = 0
bool_play   = True
int_round   = 1


while bool_play:
    int_var = 0
    print('round '+ str(int_round))
    int_random = random.randint(1,5) 
    while int_var < 5:
            #print(int_random)
            random_getal = int(input('vul een getal in tussen 1 en 5: '))
            if random_getal == int_random:
                print(Fore.GREEN + "Je hebt het getal goed geraden!")
                int_var = 5
            elif random_getal <1:
                print('dit getal is te klein :/')
            elif random_getal >5:
                print('dit getal is te groot:/')
            else:
                print(Fore.RED + "Je hebt het getal niet goed geraden!")
                aantal_fout = aantal_fout +1
                int_var += 1  
    int_round += 1  # part of round while loop
    verder_spelen=input('wil je verder spelen ja of nee? ')
    bool_play = verder_spelen in ('ja', 'j', 'y', 'Y', "YES")
    if bool_play:
        int_var=0
    
        
    
print(Fore.WHITE)        
print("aantal rondes gespeeld: " + str(int_round))
print("aantal foute antwoorden: "+ str(aantal_fout))
print('bedankt voor het spelen ;)')
