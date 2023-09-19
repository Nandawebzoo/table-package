document.addEventListener("DOMContentLoaded", function () {
  // Simulate data for active packages (you can replace this with your actual data)
  const activePackages = [
    {
      packageName: "Package 1",
      packageQuantity: 5,
      weight: "10 kg",
      location: "Jakarta",
      roi: "15%",
      monthlyPayment: "Rp 500,000",
      paymentMethodSet: "Credit Card",
      status: "Application Submitted",
    },
    {
      packageName: "Package 2",
      packageQuantity: 3,
      weight: "7 kg",
      location: "Surabaya",
      roi: "12%",
      monthlyPayment: "Rp 350,000",
      paymentMethodSet: "Bank Transfer",
      status: "Pending Approval",
    },
    {
      packageName: "Package 3",
      packageQuantity: 4,
      weight: "8 kg",
      location: "Bandung",
      roi: "10%",
      monthlyPayment: "Rp 400,000",
      paymentMethodSet: "PayPal",
      status: "Approved",
    },
    {
      packageName: "Package 4",
      packageQuantity: 2,
      weight: "5 kg",
      location: "Medan",
      roi: "8%",
      monthlyPayment: "Rp 250,000",
      paymentMethodSet: "Bank Transfer",
      status: "Active",
    },
    {
      packageName: "Package 5",
      packageQuantity: 1,
      weight: "2 kg",
      location: "Yogyakarta",
      roi: "5%",
      monthlyPayment: "Rp 150,000",
      paymentMethodSet: "Credit Card",
      status:
        "Surrendered: You have chosen to surrender or cancel your insurance policy before it reaches maturity.",
    },
    {
      packageName: "Package 6",
      packageQuantity: 3,
      weight: "6 kg",
      location: "Semarang",
      roi: "11%",
      monthlyPayment: "Rp 300,000",
      paymentMethodSet: "Bank Transfer",
      status: "Terminated",
    },
    {
      packageName: "Package 7",
      packageQuantity: 6,
      weight: "12 kg",
      location: "Surabaya",
      roi: "14%",
      monthlyPayment: "Rp 450,000",
      paymentMethodSet: "PayPal",
      status: "Matured",
    },
    // Add more package data with different statuses here
  ];

  const packageTableBody = document.getElementById("package-table-body");

  // Populate the table with package data
  activePackages.forEach((package) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${package.packageName}</td>
            <td>${package.packageQuantity}</td>
            <td>${package.weight}</td>
            <td>${package.location}</td>
            <td>${package.roi}</td>
            <td>${package.monthlyPayment}</td>
            <td>${package.paymentMethodSet}</td>
            <td class="status-${package.status
              .toLowerCase()
              .replace(/[^a-z0-9]/g, "")}">${package.status}</td>
        `;
    packageTableBody.appendChild(row);
  });
});
