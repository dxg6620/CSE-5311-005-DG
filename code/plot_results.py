import matplotlib.pyplot as plt

# Data
input_sizes = [5, 10, 20, 50, 100, 500, 1000, 5000, 10000, 100000]
selection_sort_times = [0.0158, 0.0068, 0.0064, 0.0281, 0.0707, 0.3607, 1.0000, 9.5522, 37.6705, 3754.1176]
bubble_sort_times = [0.0834, 0.0142, 0.0209, 0.1715, 0.2185, 3.2975, 6.9721, 183.1925, 58.6973, 6427.4705]
insertion_sort_times = [0.1110, 0.0149, 0.0033, 0.0141, 0.1446, 0.3233, 0.3268, 8.4450, 33.9179, 1625.5910]

plt.figure(figsize=(10, 6))
plt.plot(input_sizes, selection_sort_times, label='Selection Sort', marker='o')
plt.plot(input_sizes, bubble_sort_times, label='Bubble Sort', marker='o')
plt.plot(input_sizes, insertion_sort_times, label='Insertion Sort', marker='o')

plt.xlabel('Input Size')
plt.ylabel('Time (seconds)')
plt.title('Sorting Algorithm Performance')
plt.legend()
plt.xscale('log')
plt.yscale('log')
plt.grid(True, which='both', linestyle='--', linewidth=0.5)
plt.show()
