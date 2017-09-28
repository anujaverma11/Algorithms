n = 8
arr = []
for i in range(0, n+1, 2):
  arr.append([i, i+1])
  print (i)
print (arr)

frontCount = input(0)
for i in arr:
  if i.index(1):
    print (frontCount)
    break
  else:
    frontCount+=1;

print(frontCount)

backCount = input(0)
for j in reversed(arr):
  print (j)
  if j.index(8):
    print (backCount)
    break
  else:
    backCount+=1;

print(backCount)



# Brie’s Drawing teacher asks her class to open their -page book to page number . Brie can either start turning pages from the front of the book (i.e., page number ) or from the back of the book (i.e., page number ), and she always turns pages one-by-one (as opposed to skipping through multiple pages at once). When she opens the book, page  is always on the right side:

# image

# Each page in the book has two sides, front and back, except for the last page which may only have a front side depending on the total number of pages of the book (see the Explanation sections below for additional diagrams).

# Given  and , find and print the minimum number of pages Brie must turn in order to arrive at page .

# Input Format

# The first line contains an integer, , denoting the number of pages in the book.
# The second line contains an integer, , denoting the page that Brie's teacher wants her to turn to.

# Constraints

# Output Format

# Print an integer denoting the minimum number of pages Brie must turn to get to page .

# Sample Input 0

# 6
# 2
# Sample Output 0

# 1
# Explanation 0

# If Brie starts turning from page , she only needs to turn  page:

# Untitled Diagram(6).png

# If Brie starts turning from page , she needs to turn  pages:

# Untitled Diagram(3).png

# Because we want to print the minumum number of page turns, we print  as our answer.

# Sample Input 1

# 5
# 4
# Sample Output 1

# 0
# Explanation 1

# If Brie starts turning from page , she needs to turn  pages:

# Untitled Diagram(4).png

# If Brie starts turning from page , she doesn't need to turn any pages:

# Untitled Diagram(5).png

# Because we want to print the minimum number of page turns, we print  as our answer.