import qrcode
import time
# img = qrcode.make('https://michelkroon-bit.github.io/private_projects/')
# type(img)
# img.save("Portofolio.png")

def make_qr_code():
    url = input("Insert a url: ")
    print("Generating QR code please wait")
    time.sleep(3)
    img = qrcode.make(url)
    type(img)
    img.save("QR_code.png")
    
make_qr_code()