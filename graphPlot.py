import time
import numpy as np
import matplotlib.pyplot as plt
from numpy.polynomial.polynomial import Polynomial

def f(n):
    x = 1
    for i in range(1, n+1):
        for j in range(1, n+1):
            x = x + 1
    return x

n_values = np.arange(1, 101)
times = []

for n in n_values:
    start_time = time.time()
    f(n)
    end_time = time.time()
    times.append(end_time - start_time)

plt.figure(figsize=(10, 6))
plt.plot(n_values, times, label='Execution Time', marker='o')
plt.xlabel('n')
plt.ylabel('Time (seconds)')
plt.title('Time vs n for function f(n)')
plt.legend()
plt.grid(True)
plt.show()

polynomial = Polynomial.fit(n_values, times, deg=2)


plt.figure(figsize=(10, 6))
plt.plot(n_values, times, label='Execution Time', marker='o')
plt.plot(n_values, polynomial(n_values), label='Polynomial Fit (degree 2)', linestyle='--')
plt.xlabel('n')
plt.ylabel('Time (seconds)')
plt.title('Time vs n for function f(n)')
plt.legend()
plt.grid(True)
plt.show()


print(f"Fitted Polynomial: {polynomial}")

plt.figure(figsize=(10, 6))
plt.plot(n_values, times, label='Execution Time', marker='o')
plt.plot(n_values, polynomial(n_values), label='Polynomial Fit (degree 2)', linestyle='--')
plt.xlim(0, 30) 
plt.ylim(0, max(times[:30]) * 1.1)
plt.xlabel('n')
plt.ylabel('Time (seconds)')
plt.title('Zoomed Time vs n (0 to 30) for function f(n)')
plt.legend()
plt.grid(True)
plt.show()

print("n_0 can be approximately 1 based on the zoomed plot and where the trend starts to form.")
