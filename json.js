// Example of using the JSON data in JavaScript
const cropsData = {
  "crops": [
    {
      "name": "Wheat",
      "yields": [
        {
          "soilFertility": "low",
          "plantHealth": "poor",
          "yieldPerAcre": 10
        },
        {
          "soilFertility": "medium",
          "plantHealth": "fair",
          "yieldPerAcre": 20
        },
        {
          "soilFertility": "high",
          "plantHealth": "good",
          "yieldPerAcre": 30
        }
      ]
    },
    {
      "name": "Rice",
      "yields": [
        {
          "soilFertility": "low",
          "plantHealth": "poor",
          "yieldPerAcre": 12
        },
        {
          "soilFertility": "medium",
          "plantHealth": "fair",
          "yieldPerAcre": 24
        },
        {
          "soilFertility": "high",
          "plantHealth": "good",
          "yieldPerAcre": 36
        }
      ]
    },
    {
      "name": "Maize",
      "yields": [
        {
          "soilFertility": "low",
          "plantHealth": "poor",
          "yieldPerAcre": 8
        },
        {
          "soilFertility": "medium",
          "plantHealth": "fair",
          "yieldPerAcre": 16
        },
        {
          "soilFertility": "high",
          "plantHealth": "good",
          "yieldPerAcre": 24
        }
      ]
    }
  ]
};

// Example of accessing the data
const cropName = "Wheat";
const soilFertility = "medium";
const plantHealth = "fair";

// Find the corresponding yield prediction
let predictedYield = null;

const crop = cropsData.crops.find(c => c.name === cropName);
if (crop) {
  const yieldPrediction = crop.yields.find(y => y.soilFertility === soilFertility && y.plantHealth === plantHealth);
  if (yieldPrediction) {
    predictedYield = yieldPrediction.yieldPerAcre;
  }
}

console.log(`Predicted yield for ${cropName} with ${soilFertility} soil fertility and ${plantHealth} plant health: ${predictedYield} quintals per acre`);
