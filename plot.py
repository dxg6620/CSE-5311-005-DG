import matplotlib.pyplot as plt

# Data from your benchmark results
# result obtained from quicksort.ts
sizes = [100, 1000, 10000, 100000]
best_case_times = [0.08283299999999372, 0.4142089999999996, 5.17658400000002, 14.19545800000003]
worst_case_times = [0.037332999999989624, 0.2400829999999985, 1.204499999999996, 12.092624999999998]
average_case_times = [0.05020799999999781, 0.34575000000000955, 1.5180409999999824, 35.753916000000004]

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(sizes, best_case_times, label='Best Case', marker='o')
plt.plot(sizes, worst_case_times, label='Worst Case', marker='o')
plt.plot(sizes, average_case_times, label='Average Case', marker='o')

# Add labels and title
plt.xlabel('Input Size (n)')
plt.ylabel('Execution Time (ms)')
plt.title('Quicksort Benchmark (Best, Worst, and Average Case)')
plt.legend()

# Show grid and display the plot
plt.grid(True)
plt.show()
