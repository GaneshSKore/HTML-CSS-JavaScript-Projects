document.addEventListener("DOMContentLoaded", () => {
  // Metrics data
  const metrics = {
    totalUsers: 1234,
    revenue: 12345,
    pageViews: 45678,
    newSignups: 89,
  };

  // Update metrics in the DOM
  document.getElementById("totalUsers").textContent = metrics.totalUsers.toLocaleString();
  document.getElementById("revenue").textContent = `$${metrics.revenue.toLocaleString()}`;
  document.getElementById("pageViews").textContent = metrics.pageViews.toLocaleString();
  document.getElementById("newSignups").textContent = metrics.newSignups.toLocaleString();

  // User Growth Chart
  const userCtx = document.getElementById("userChart").getContext("2d");
  new Chart(userCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "User Growth",
          data: [200, 400, 800, 1200, 1600, 2000],
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });

  // Revenue Chart
  const revenueCtx = document.getElementById("revenueChart").getContext("2d");
  new Chart(revenueCtx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue ($)",
          data: [1000, 2000, 3000, 4000, 5000, 6000],
          backgroundColor: "#2ecc71",
          borderColor: "#27ae60",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
});
