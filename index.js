const arrayStats = (nums) => ({
    max: Math.max(...nums),
    average: nums.length ? nums.reduce((a, b) => a + b) / nums.length : 0,
});

const stats = arrayStats([-4, 9, 5]);
console.log(stats);
