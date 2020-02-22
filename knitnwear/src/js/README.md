Copyright (c) 2020 Log G
This Jimp Library is modified by Log G

It allows you to use 3 color dithering
After importing the jimp library, use Jimp.read 
then you can put the image in dither3 algorithm

'''
Jimp.read(this._imageurl).dither3(palette,outputColors)
'''

Please set palette as 
'''
const palette = [[0xff,0xff,0xff],[0x7f,0x7f,0x7f],[0,0,0]]
'''

and set output color as the color you want to output from lightest to darkest.
eg.
'''

for color combo 1 please set 
const knitcolors = [[0x8a,0x58,0x31],[0x86,0xa0,0xb1],[cc,c8,ba]]
'''

Then you can use getBase64 to get the image (or other format of the image)
'''
Jimp.read(imageurl).dither3(palette,outputColors).getBase64(Jimp.MIME_BMP, (err, src) => {
          //src is the dataurl of the transformed image
        });
'''
There are other photo algorithm that you could use in Jimp Library, 
Please check the documentation below
https://github.com/oliver-moran/jimp

The Jimp library were taken from project Jimp, Copyright (c) 2018 Oliver Moran. The unmodified part are licensed under the MIT license.