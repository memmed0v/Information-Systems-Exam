const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: 39.99,
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    price: 89.99,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxUPEBAVFRUVFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0fHR0tLSstLSstLS0tLS0vKy0rKy8tLS0uLS0tKy0tKy0rLS0tLS0tLS0tLSsrLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIDBAUGB//EAD4QAAICAQMCBAQEAwYDCQAAAAECABEDBBIhBTETIkFRBjJhcRQjgZFCobFDUmJywdEVkuEHFjM0U4Ki0vH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAOBEAAgIBAwIDBQgABgIDAAAAAAECEQMEEiExQRNRYXGBkaGxBRQiMsHR4fAVI0JScqJi8QYzU//aAAwDAQACEQMRAD8A/G5s6lmkCzokQsFEUBLQEgEgEUCSUUSAQBICSASEJAEyBAJIQSAQCQQSgkgEEEAQBAEAQUsAQCwUyqdUaKBOiRCzQLU1QFS0BUUBJQElARQJJQElASUCSUBICTIEgJIBIBAJIQQCQQQBBBAJIBAEAQAIKWAWAIBtCz0xjZ0LtnVQIXbNqALU1tBDG0gqSgSpKAkoCSgSSiCKBJmgJllJM0BJQIZmgJAIBJAJCEgCQhIAghIAgCAIAgASFMoAgEgHYFn2Fio3Yqa2AlRtJYjaCETLQFSUCVJRCGSgSSiEkaAmKBJGgJloEmaKJloWSSgJAJmgSQCQEkBIIIAkISAIAgCAIBRBULkAgFgHdP0LNkImRRiYMtCRgkywSZoEkohJCEmWCTIJJRLElCyTNFsTNCyTLAmSkMyBIBMgkgBkBJAIIIAkBIAgCAIAEAsFEgEA7CZ+h4I5MxLxSMubMd8UjO9k3zLG9jfIXeN0wXcLkYsXMizG5GLFyUSyXILEjBJgomWUTLBJgokYJMgsgJIUSEJIBIBAEAkgEAQQQAIBYKIAgp17p+jljoysiZiROXIaRjUWYpEqZsm0klgSEJIBIUSAkgEywJmi2JKLYmQSZZRMsomQSZZRMgSASAkgEgEAkASAQQQBAJALBSwBAOifrGjzFnmnE6pkInFlJMlEhCSAkhCVIKFTLYolSWKEhCQBMlEgElCxMNFsTFGhMlEgJMlEgFSAlSAQBIQkAQBBBAIIBYKWAIB0T9W2eYTlJmkhOEjohObKbNPp2yNtWr+pA/mZiUlFbn0+P0N48csklCPV+qX1pGzW6B8JG+ufY3+8JppNdH7V9RPFKDakunqn9GzlqSzFHbg6TkfGcoKUDRBdQ/8ADyE+YjzDmvf2M6RxSl0OUssYptk6V0rJqn2YzjBq/wA3ImId1FBnIBNsOPv7TntZttJ0a/wD+N4Npu3BbLAJbEAEueAvI57VzK8bTpmYzTVo29U6Rk0zKjtjYsAQcWRci0e3mXi/pDxuk/cRTTbXkZP0PKMK5t2JgwBCrlRsgsE02MHcpoevuPeWOFy6GJZoxfJ5yIWIA7mcdrbSXc6N0rZ36vo2TFhXOcmFlauEyq7i1DeZF5Xhhd+vE14TqzlHPGUttOxoei5M2Nsi5MI2gkq+VVcgKrWqHlvmHb1hYm3RnJqo42k0/cjRodA2ZtofGlBjuyOEXy1Ys+vIoesx4bOmTMoK6b9ismr0TY8hxFlYrfmVrQ0asN6j6zMsTTr3lhnUobuf1OnqvRcmmALZMOQG+cOVcoFNt8xXtzOcsbUbZMOpjkltSafrwcWm0zZDQoDy2zGlXcwUFj6C2H85zUHK67Hec1Cr7/tZ19U6S2mZVObDl3gENgyeIoskUTQo8XXsRJ4UqTaq3RnHmU746G5+gsNMdT+J0xACk4lzA5xu9DjruPXnjmZ8OVvjpfyL40bS8zV0vpB1G6s+DFQBrNl8Mte/5ODfyH9195lwlxSu/I1LIl7jn0miOXJ4e/GnfzZX2IKBNFj6nbQ+pEk4SjfF0649/wCxpSTr1Muq9ObTZTiZ8bkAHdicZENgGg44NXR+sy01FNqr8yx/F0Ml6S5xtk34hsJBQ5FGXggcY+5HMqTeTw6d+dPb8ehZRqLk2uO18/A59NpWyEAFRYJBdgo4qxZ9ee0kvwxUqfPkm/ki48bnLaml7XRh4B3bbA5AsngWQLJ9ue83LG47vTk5x/E0uluvT4mWq0pxkAspvm0YMP3EzT2qVNX5pr6mskNkttp+x2jnkMFEAQUsAkA6hP0kpHKKE5ORuhMNlJMg7dCoKE+u4UfoAf8AU/yl/F0h1Zi8V3l/Kvr/AFHZqdOzjaeTuCj7nsJmc8juMqclXwPfjw4IaZShajOXHHO7yfl0+B52XROu3cAA3Yg3Q942NVuj18n/AAeCE3JtLtyfUL0YqSSu0ErY3Ia8X5AQGJFgz243G+H1On3XDJpSi7479+3c7dP8JOPlxMdoCsQ2MeYqpawzgjlu9Dv3l3YIy5fJcmGMW01fb5cg/DSFVcqW8XcykFR5caqWNlgOOfe/S52yT064kvI87wqMVXR8o2N8PYwMuXKDWHH4rg7SQGXejUhqiAeJvxsGxVHq/ocFibnKV+0zw/DfgZVQIyvu2gEowLBd+21Y87TcmHLp+sF9f1PDrIS2OnbPIw/DpwZjkcDw1bLjDBsYtwrKRRYECz3NdpyT06nx9PPr9TebNPa4p8npf8DwL4aEWGXcoLqPJuX++wFk5AK72ZubwQpUfIjrM097jxT59tPyT8jYOi4MeLLlKsqrt3rYvgKUqmI7Eev3mJPCk5JV/BiWszSyQx2m3dfO+1/Iyw9BwDOMQUpkW+zJ82wE/I54KsvPb07zmnhmlx0Ll1eojjc5NOL9/F8dvM59R0nTeG7tjJG7Km60s+EH8UVv3fwEjjn0nBzhco+79Dtjzaq400lSde2q7epl1LoQVMw5J/DtkY7k4xoQbp2G75ews8Tw5usI3w2a0OoyZWpRSqL9nJxdP6AmDTahtR8m9Mb8ggENx5ga/iu79D7TlvlGE4x6uqPbk1E8uqxxXG238eP0O/pfS9N1DKVxlnYpkYElDzjpboMSvcVYFjkXPl6h6rDGLl+W+i86vy9D6eOKUXGPD/Q4s2i0u0qrqQCz7Bmw9y4Rvy/E3AkkeUi65qSP32TlJNK+Onbl1dHrg8K2qS6VX9sw+JNBptBqWwurqaYDaP7NnJCtyPSj9qmdJ96zYoyjX4X381zfT1PReCDanfPl5f1Hn5cOlOEZ1B2l/DPHm8QW4NXYG0gX60fad4w1fiShJq5c9e3Ty8zXiaVU6dL0/k29C0ePUalCtnY4chh3F88Th9pSz4MK8RrlUq7H0Ps+Gm1E5PHacfxO+/zMdR0zG2d1LY8bjafzMqY7BBAI3sLPk5rsSPedI6rUJJwtp+ScunHZMubBoVNxzLnr1pc+9HHn0WNUQkAK9FSSFolBdkkAC1/eSGXNByinzBu+/wCnod82n0Xh48slxkSrt278/r1MX0aUxBVgoIO0qwIO3aAQavgzo55963dZri1XT0aXocoabSSxZJQX4cfXv1qu79Tz9bhAxhlZSO9BgSL9wOQZ2jLNOLc+kfSvTjjk+VqYaeFeF1frfx54PPmTygQCwCwUQDoE++YRlUyzokCJgtGJkMs9PTYn8oxFRSAncQPMTZ5J/wAQH6TWRRilJr06N/Q8+KeRzlGLrm+sV04/1dy5dPlQHcQSXB72OQewHHP+giCbby35Lv2u+pZviOnp3bdcNcpV0b5fPyNq4Mhp327aZVF15hxyByKNm/pO6byOvIyorT45SfG5NL23X7mzpvTdTlX8kCl2FiCFIBJprJ7eU8+nrJGbjxJ8Gvu+2UZpPz939TNmqxvmz5MyDdudQCf8VLj3E9ieO83NOMnJcIjUdQp5OXz+vB1dVxZHTT6M22TCcoZbDU7te1KJBG1VPE6NLLzH0+hjdbjjfa/r+w0wyYdJmLGl1KHEgVlonHmXxN6g2vymrHN/WN8ZR8N80/0a4OVLHbXF/uY9EwNg1GJ3OxUAzseAxxqw5W63ckcDvNP/ACXtk7tNfLuc5w3K0ufU5NThbJky6kVTZOWPABc8bmPA7+sxLHSc0+DHiXUGdXUtN42THiAJdE2uLDfmV5wCpINADt7Gbm/H212PNik9Osjlwm+PZ2+ptTyaHIr3+Y5TH2rgsuQcGwfJ/T3nPeqljfPUxKDlqITj0St+fmvqaulYhpMqtlsY9m5wO5RiEFDufMy9vqfSc+cUop9zWob1OKSx8yT49q/g5V0LZWfMoHmyAFjwNzsK3MeByZicWlKaOyzKG3E30X0O3rWj8bUJgALOigEd/wAwqHequ/ecYrdUkcNPJ4McpS4Tfy6ImpBTQDE2QfmZiVxh1NKqujF0B3Id3axzPLtnLNKvKj0xgvEjlXkep8O6nVfjPFz5Wv8AD5bLMqucbqVUoCRu8zKeP9p87U6dLCoYOFd++q9ezPZjyqbbl2PFwDUPpmK5GGHf5rJGNXchrJ9Oef0npnhhDK5uK8SuPZT/AGZ3hO8ai3wbfisNqtc1MMrNsIKsHu8SEqGUkECjOGjx5NPpk5NJJu/odt0MmWkup5GiTLkY6RGQAndTsiKSK5Dt60b79gftO84yUvF7pdeejNRyR2vH2v8Avqeh8PK+HV7CRuqjtYML8rEbgaJHY16gzx/asMk9Lvm7Sf8AHkfU+xJ4Y6rZFctNfr5m7rGlyHOyeJjx+h8TKMe/axPF96v/AOQ95w00/wDJxSUXLrVKzvrpqOaVOtyXeuh5+fC4xodw4LIW3AoCHBBDDiqPf2E9H4vFyqSu0pdOfhx5HNyT0uDJF1tbj172/wB/gahgej50bjd5HDVsYXurt3P7Suclsm00ovuq6+3r0Jij4viw3XKSvh3xF/Lhs4fwx2tTIKJBXd5uDXC96nqTyuTxfpx8T5Mo49vicfHn4HBOBzEAsFEAQU6ln3mzMTITJ0EjKVE3MF9yBftZ5MJWYm6Vnq4cDOzFXRRZoOQKBPAmsuSUH+FN+xWeLDjhkX42k/V0M+nbjfkUqCG8vbv7+8xk8XJik+no1R6NN93xaiCq+U7i7MhpMgDtuReeVJAfzV2XvVOvP1+hnKOplKax47W7pw679XXp/bR1zaTHht5lbjV883x2v1N+HpbZvDCbRVoHyHam8Aswv37/AMpzz6p4W/8Ax60r5s9c9Niy4ceR3TSS5rtfmb9LpTkx5cAG7IxDHbyuzFuLkV3qlP2BnbLnnDEtz5k+Pl2OOnjhyRnjxppR637+jsz0ek/C5cD5ipQgZF8NgxojgN7dxfp3onmXT6jI90r4jd8UeWsEMkaTttf3qaNd0hsD5PEKIw2sUZvzG8XkFF7sPUn2M4Ys+bI/wvrfYZ8WKD/FzR29V0f4lcGZLXGoxabfkIVRlobtxugO5+37Ttq9VJ5mo9rfzOMYxcE+3Q16bSNkTLokByZGyA+Q7kK4g24qR352m/YGdJaiUdP+L/V/H7Hgyfhybo9jR0nbpsmPJkYMh38Y2VnFKPmUG1+YcGvX2mtNmmpO+3oY1mKWTE1GrddTTqemMmVi21CyHMdzBbU8+WzbE3wB7j3mJTluv/czWHMsmPjlR4O3qWnGpxrqAGC4lTGWY1TmgfWq7c/eenK9y3eR5dNN4MjxNq5tv3djLS4Q2N9CBvyOykFGVkKnHZAZSQTRHb1H0lxNTjT7lz7seSOdulFe/qcnStmkzo78orMrKhUuK3LRW7Hvz3BE5NK3DyO2ojLUYWo9XTRo6l08owytSeIpyLuNbhXFX/ER6fedcmOGPa76nTTZfETgudvBu6lj/FY1yojEYcWJcjNzT0RY57H/AEnLT6WEYTd9217DopOEvbwXp+pU6fLo1vI+V8fhFL2c2rqwajZ8tces8z0sc2px5rpJNO/Zx9Wepz2QcK6tM4el5RpNWni3tRwHAq6IKtz+p/aT7Q027FPDF9v5R102VKayNef7DJ0lS1fidJYCjd4rUf4bsCieJpKkvZ5eS9puWzn2v6mvpO5NSgsGn22vY2dtgn05nj+0Mcp6fIr4q/hyen7Nywx6vG65uvjwe58Y4nTNu5CsLD8gHcq7l3dj8o4+k+V9k+HPSxi2rTbri1XB93XX41q1Sr5nl/hsow843oMGBKtRV0YEj3HkHM9Ty4/vSluX5Wuq9lf9jitPJ6dwSfElK+fL+Ec+lxO54DMDak8kDcCBZ9Pf9Jz1E4Rx7E0u/bsb0+Oc8qmk5Omu76qv2ZynC2+tp38cUb7D0neWqablGSrz49h896GN7HF35c38Dz8ykMQZzi7R4s0HCbTRhKcxBSwBAOpZ95kiZiZs6CZbKb9CvmJPopr7sCAf0u/0nTHyzz6l1A7NPpWP9sFr+96/bgzOV5IVtt35JfqccPgyvdSrzb+VFzaVqrxgw+l/T6D3/lMRhmypptr21+jOksumxNOKTfp/JcuIl2cOF5UckCrpR3/SzOG6eBxwqXKXZeS5PbKOLVQnqpR4cu783x8P0Ol9KSF04yK1ZCdwa8bMRQIJoduLnJ+JgxSzydXT5XPTuvmdI5sWqnDTRj+W/Z2rp5dEbtFWHdkORWO3LhCq3nUkMhZgP4a3evO4e83CGbNOEm+lPlcdP5OEs+DSqcYx62uPrz7DVi6WUCXlxoMis6l2CghStjjkN5hwfYzhHUZcqlCMm6dOl/eDM8OPE4za68nV1QHW5suqx2qogNMRuGNFoDk8ml7CbyTyaeWPG5K3wqOMpxz757en7GGoyL+FGjDBycxyl1fclEKiDg9+GJ44DD1sDUYZVGeVv49ThkyRilBI3dKX8FmfJldN2JWUYhkAylsqUjIBwyjcCTfYHv63HPJm2Si779ODzSx7ou1R5mPp5CDKXVFZiu5jtAPJ59QJ2bmpSVnNZlKfh9Wkdusw/jM4XH/ZoqA7gQfDUKxVroqSCR9K+09ChJpcnmjL7pjk5O7bfx6Gf4hE0T4N6M2TILVWO5AoYEOvHNj695qMruL9eTUsE3mhmT4S+bMdBhGi1GJ8hAFHIFLBdwFDapPAc7uASO3JE6ySxV3uzM29ZinGHXpfr+xyfg/FGTUjgA2xPfn6es6eHGSlk951Wbw3DC+/CN2uyLqvB06UxxquPcGtXYFqdSewII7163EZQzVF/wB4NY8UsEpy67nZlpguFNRgfIgYhdoLHviZXNBQQQwJUX3IPpzEpxxT2U37vNep2UfEjv8AaefgxnTHFqOCodW2giyEYWCAbW+3Nd5MmKMMSmu50jk3T5Rz6nINRqCwKoHdqOQ0FDMSN5F9r7zzZZqb3HfGlHgyzaAKt+PgPfhTkLGh2+Wv3MxcfJ/33m5Nehy4iysGvsQf27TnPFuTV8MuHPHHNS29HZ9F1PrCZlUMvIqiSePpXb/8n5RaTwpPaz95LU6d/ia5NTdSDqMQW7oBbPc/f7/zkx6WUsirqzctdpoY2lBeZzjWDEzodoZWrb5rYd7BA2+o7n3/AF+k/sqUpOLnyvQ+TD/5BjwXJYla+NfA4smrXdu2iebwZL8LfQS12Fy3xiqZ5WqybmLe89MFSo+FqsniZHPzNU2ecQUsAQDpUz7rMxZmJhs6oGZsrO3R4gybd4UswNm+y2K4HqSf2nSSezhN2+3/ALR5pNPIrklSfXp29Gbs+jKKD4wa+PLu7/XcBOaU1CUnujXnXPwbNLw55I41tlu7rt7bSNSo91vPHf1+8KMpxUt7V+vmVuGPJKHhKW27pJ9Or9nqdKadirY1NsR4jH2TGGZj3+5/SebNieHNGUp3uW31ttfsezTZ8eowZIqO3a93amkn+5s6ViAZM7ZUIRg3hEvvO03Xy7ea9D681JqdPlzp4vxc8XxX1v5eyzjp9Vhw/wCZSTXbv9P1ONsDks281uIJHFse/H7z0pvxZYlLtfuPPNReGOdx6uvf1OjqOfxUwovl8LGV/wAzF2Zm+l2or6TGn0Tw7/xfmd/JL9Dnm1SyV+HoqMunavwcedDbNmxjGGP8HnUsa9bUEfrM5dE8maGRz/Lz8uPgYjn2wlFR6nHpxsYEsSAQa96nTLp5Tg47znuT7HZ1bXDPqMmcLtDsSq0CVW/KL9aFTlj0k4QjFT6KuCX14McusDaYYK58RnLccghdor0ogzrHBJf6jjHHWZ5fSqHRdaNNm8RgXG1123XLLQP6Gp2jFp8uyarD4+PYuOUzz2U2TuPNk1x3k2O7s9KapKuh39Z141BxkLt2Y1Q+tsO7fS/adcsnOr7Hm0uB4FLm7bfuOjDkOnwHHkH/AJjwyjN2Rdxtm7nbwR29DOik8UKfNmJQWbKpRf5Lv19nsGmwBM+LY+J/OhrHdcMODair/f7RipyVcHTJ+V3ZfiHTqnUMmIsi070zBioG5yAdoLelcDuZrNNb02uqTNYFeN+1opxnOqaZCrFBkO8GldWKvQ3gHij6ek7YmsicP78jTbTVLocPTtKuRsiNmxYtgseJXnPPCn34/nPHOUYycdvR0evF+ON2ul8mtNC7YmzAeVSATwPMeQoHvNrFGUW0+nYwput21UjZjxYmWxqsV1e3wswJNdrGMj9TPPGVrp9D0blH/b8DSmmfI+1B6bj9FFWT9LIH6zxS0byZdkO573qf8tT9DPpiLePIci+ZiCoJ3pRFFwR2N8Vfb9JjT6bbJZL6clx6mE5KE1+Z7evS+j+Jh1Gn1DFsgUc021j8p215R34+31E9eqqeZuL6/pweKH4bhOk117nBlxnnnsL+/a/6z58sDU5Rvor9pp5bxxkl14MdRpwotXDDjsCKv0P1H0uTwpLHvarn+v8AtGJtKe1O/wC9DnnIhRBRAEA3qZ9uzETYJycjvFEYzUDM2dOr02ag2NW2oiglfcmz/Nqnj1mp25FFSquOtc8m4fZ+eUHk8NtP39jXocOZ3UkOV3ck7iBXPr27Tw59U9kk53a8z1fZ2hySzwccbpPnjy5Mc+PUr52XIu8sb81Hnnt95patTbqfT16HHJotRib342r68efn6P1OvQaPVFMjDHkJKALasSdzLe2+/lB/eccutipw3T6Nvl+jR6NPos8cOWsbVpLp5tX8jky6bVY38JkzK/HlIcN5gCtDvzY/ed1rG42snHtPC9HO/wD638Dr1Wj1WLTKGw5V3ZHZiUYEBQgXd6j+PvOGPWRllltyK6S6+1/seqemy+BFeG6Tb6dOEjzMQyN8odv8u4/0nolnces6954VjvpH5GxdLqD2x5j9kf8A2mHqkuuT/t/JXjr/AE/I34uka1/l02pb7Ysp/oJn75H/APX/ALfyZqPoNZ0nW4AGzabUY1PAOTFlQH7FgB6idFqG+k/mXbHyNuLoPUGUOuj1TKRYYYcxUj3BC0RJ94f+/wCYqPkaMnTtWppsGdfoceQf1E1HLOX5ZN+xs5vJhj1lFfA1/hc//p5f+V/9p0Uc76bvmPFwf7o/FGspkDbSHDHspDbjfah3kfjKW17r8ubNqWNrcmq8+D2tfoNY2HAPw2alxEsRifjbky/MQOPLR59D7T15pZ/DhHa1S8vcfP0+bTeLl/zI3fmv9qvv5/Q4dFo9W/nw4cz7CCduPIwBBsbqH9ZxjLUxadS4fr2PVlnplFqcopNd2l14PS+LtJqjqsuVsGUIch2v4b7fNz81UfX+c9Gslnnl/CnS4VJnm+zsuCWCP402+vK6m74O6frDqsbjBmONxkXecb7OcbUdxG35tszpcmfFmUpp13uz1t4ZPZGS3PpyrPF1nT9XjYeNgzIzdg2N1J9OARz2r9JwnLUTm5c2/Kz0LCoRS2nu9O6H1BdLqQdJnG5cDpeN7bbkB8liz5W3ceiztp8ubHGfVv8AU0sG+LSR4OPp2p8XwRgy+JdbAjb79ttXPKvG7X8w8VdY/I+o6R0nNj0uZmxZFzhWREZSGe2Ujynk8n+U+xpXOGnc2nuV1+h6oYN+GSrlHyuDRZ8rsmPG7P5iQoNigSSf2Jnx140m6v8A9nmWJ9EuV6G3q+DIuVtykBmZlHpzRIFftNaic99Pg9Gp00oZZOUfzf39SNo8wx7ijCjf12sl/wBP6zzPK4T5fLX1Or0GZ6bds4Ur91fwcy4HKkgHaO/tI8v+lyPNHTTlFyUeF3OYTZ5SwUQCwDYs+u2YRsBnN9TsmFeiDQNEGiLBo3RHqJ1ic5M7NV1nK7u1JTsz7digKWN0o9ALofSeDU4ObXQ92D7S1EMax8NLzVnPi6rkTldt++2eCWnhLrZ3w/bGowu4bU/+Jlk6xlbuE++3n95laaC6N/E3k+29Tk5kot/8TdpfiHPi+TYP/b/1mJ6LFP8ANfxNR+3dTGO1Ril/x/kxzdcyuwYpiseyUD9xfMsdJCKpN/E5/wCMZv8AZD4fyZ6v4j1GVBjbZtAoAKRwBVd5nHocUJbldkn9sZ5x21FL2fycGn1j4/loX9P+s9E8UZdT56ytdKOvF17OvbZ+oP8AvOMtHjfWySySZ62h+Ptbh+QYf1R//vOP+GYfN/FfscXBMy6r8farVD87Bpiw43+G+6va9/b6Tp9yjVbpfH+CqNdzdof+0jWYMfhYsOmRSbIXG4s1Vn8zkx9yj3lL4/wHG+552u+MdVnNuMX6Kw/q09GLGsX5WefJpMc/zHCeuZv8P7H/AHnsjqskehlaHEvM0HqDlxkKoWHYkH9PWVaqamp0rX98zp93jscLdM9z/vxqjj8JseBl9mRz6V/fnef2jlk7cV8H+587/A9Op74ykn6Nfsa9J8Y58R3Jh04Pvsaxfpe+JfaWV/6Y/D+TWT7Hw5FUpzr2r9hrPjHUZhWTFgNdjsax9iXlj9p5U72x+D/cuH7Gw4vyTkvev2Nmg+ONVp//AAseAe52NZ+9PJP7SyT6xj8P5PTh0MMWRZFKTa83f6GGt+MtRmfxHxafd3J8NrP+Y7uZmOvyR6RXwPqSztqmkdaf9outVQiJp1UdlXGwA/TfMLWzXZDHqJY+lHlJ8SZQ/iDFp79vC8v/AC3Nff8AJ02r4Gp6ly6pfA2av4t1WYneUNjaRt4IPpRM0/tHM1tpV7BDVSh0OHF1Z1JYKln/AAjj6j2nKOsyx6V8CvUttOlwas+vbI25gt+9C55sknOW6XU3k1s5u5JX7C/8Qfbtpa9toqcXiTdnT/E82zw+NvlSNR1LVXH7C/3mljV2ed6ubjt4+CNE2eUsFEAsFM59WzkW5S2ZAXF0aSsvhznLIu5tYbIcE80owfY34D8yHTznsiPAkY/hzJtQ8GRPBMm0y8UieGY2mdjMdsbCUxtjaKZdhk2jaxsMUXaybDFDaxtiiUxUbSCppY2wXbNrBIljYZpaWbFovhmX7pk8ibkTwzI9JkLuQ2GYeCa7FTseGZl4peRaGwybGKZNpk2sUKkoUSpBQqCUIAEAsFLAEFM59Q5CaBbkZU6M1ecpRO0chkHnNwOqyGQec9p0WQu+RxL4hC0lBzMS01tObkYEzVHJsxuKM2S5No3DdJtLuJukom4hMbTLkJpIy2UTtEhQZ3jIhkDO6miUXdNrKiUCZJTQolzi5I0uBvnFs2pAtObaNWYlpxkxZiTOTFkmWCXISySEKIKiwUQBIDKfTTORZqwSAJCluZaKmXdG0u4bpNpd5d0mwu8haXaZ3kuKJuJI0LEzQskUSxJQElASgTQLLYFzSmQty7wLjeKJcw5MpLmdwFzm5GkSYbKJiwSQEMhBICiCosFEAXICz6FnMs2mQS2BIUSkLKBAJIBDYEzZRI2CTIEASATNgklgstgRYJJYLLYFxuAkcikmHICYs0JASQCQEgCQhRBUWCiAIBZ67Zgs0mKE3ZBFgTQEWBIwSZsC5mwLksCWwJASLBYAkYJMlElgRYEWBJuAk3FJI2BMlEgEEJIBAEgEACCoygogCAZAT1koVKKLUu4bSVLZmhNWQRYEoJMMIVMMpJKAgCCCAJLKIAmWBIUTIEASAkoEgEhSSASEEAQBAEACCoygokAgpbnqIW4FlgpDI2CTO5kaE2mZLOyMiVoCcWqNkiyUKksUSQlCAIstCLAmWwSAWQCQEkAgCAJCkkAkAgggCAIAEFRlBRIUQCztZAJpMFlBIogigWKBJtMyxc1ZBIyos5s2SZAhASkEyUS2QkyCQQsoJIBIBIBAEAkgEFEhBAEAQCiCosGhICwCTqQs0gJogghZpFEjBJUZJKQsoE5yNokwCygkAGQCAQzIEpBAEgEhQYBJCCADAEFEhBAEAQAIKjKCiQpYB//Z"
  }
];

const productList = document.getElementById("product-list");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsEl = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];


function renderProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.title}" />
      <div class="product-info">
        <div class="product-title">${product.title}</div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
      </div>
      <button class="btn" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}


function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }
  updateCart();
}


function updateCart() {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItemsEl.innerHTML = "";

  cart.forEach(item => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;

    const li = document.createElement("li");
    li.textContent = `${item.title} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.background = "red";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.padding = "2px 6px";
    removeBtn.style.cursor = "pointer";
    removeBtn.onclick = () => {
      removeFromCart(item.id);
    };
    li.appendChild(removeBtn);

    cartItemsEl.appendChild(li);
  });

  cartCountEl.textContent = totalQuantity;
  cartTotalEl.textContent = totalPrice.toFixed(2);
}


function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

productList.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const id = Number(e.target.getAttribute("data-id"));
    addToCart(id);
  }
});

cartBtn.addEventListener("click", e => {
  e.preventDefault();
  cartModal.style.display = "block";
});

closeCartBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thanks for your purchase!");
  cart = [];
  updateCart();
  cartModal.style.display = "none";
});


const form = document.getElementById('registerForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  const info = document.getElementById('userInfo');
  info.innerHTML = `
    <h3>Hello, ${name}! </h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Şifrə:</strong> ${'*'.repeat(password.length)}</p>
  `;

  form.reset();
});
renderProducts();
updateCart();

