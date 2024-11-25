from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    product_name = data.get("product_name")
    target_market = data.get("target_market")
    specifications = data.get("specifications")
    certifications = data.get("certifications")

    # Mock analysis logic
    missing_certifications = []
    if "CE" not in certifications and target_market == "EU":
        missing_certifications.append("CE Mark")
    if "FDA" not in certifications and target_market == "US":
        missing_certifications.append("FDA Approval")

    tariff_cost = len(specifications) * 10
    score = 100 - len(missing_certifications) * 20 - tariff_cost // 5
    score = max(0, score)

    suggestions = []
    if missing_certifications:
        suggestions.append(f"Obtain missing certifications: {', '.join(missing_certifications)}")
    if score < 80:
        suggestions.append("Improve product specifications or adjust packaging.")

    # Response
    return jsonify({
        "product_name": product_name,
        "target_market": target_market,
        "score": score,
        "tariff_cost": tariff_cost,
        "suggestions": suggestions,
    })

if __name__ == "__main__":
    app.run(debug=True)
