# Zipf's Law Mystery
Back in 1949, the linguist George Zipf noticed something odd about how often people use words in a given language. He found that a small number of words are used all the time, while the vast majority are used very rarely. If he ranked the words in order of popularity, a striking pattern emerged. The number one ranked word was always used twice as often as the second rank word, and three times as often as the third rank. He called this a rank vs. frequency rule, and found that it could also be used to describe income distributions in any given country, with the richest person making twice as much money as the next richest, and so forth.

## Command
Read a TXT file and the program will try to predict how many times the nth word occurred using Zipf's Law.
```
    node zipfs books\lord-of-the-rings.txt 3245
```
Output:
```
According to Zipf's Law, the word "interrupted" should occur 10 times. It occurred 12 times. Off the mark by 2.
```
