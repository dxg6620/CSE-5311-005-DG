import time
import numpy as np
import matplotlib.pyplot as plt
from numpy.polynomial import Polynomial

def f(n):
    x = 1
    for i in range(n):
        for j in range(n):
            x = x + 1
    return x

n_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 100, 500, 1000, 5000, 10000]

times = []
for n in n_values:
    start_time = time.time()
    f(n)
    end_time = time.time()
    times.append(end_time - start_time)

plt.plot(n_values, times, 'bo', label='Execution time')

p = Polynomial.fit(n_values, times, 2)
plt.plot(n_values, p(n_values), 'r-', label=f'Polynomial fit: {p}')

plt.xlabel('n')
plt.ylabel('Time (seconds)')
plt.title('Time vs n')
plt.legend()
plt.show()
