const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vReportLap = new Schema({

    serial_no: { type: String, required: [true, 'Please enter Value.'] },
    selected_bank_id: { type: String, required: [true, 'Please enter Value.'] },
    selected_branch_id: { type: String, required: [true, 'Please enter Value.'] },
    valuation_request: { type: String, required: [true, 'Please enter Value.'] },
    property_occupied_by: { type: String, required: [true, 'Please enter Value.'] },
    purpose_of_valuation: { type: String, required: [true, 'Please enter Value.'] },
    date_of_valuation: { type: Date, required: [true, 'Please enter Value.'] },
    valuation_done_by: { type: String, required: [true, 'Please enter Value.'] },
    assessment_of_fmv: { type: String, required: [true, 'Please enter Value.'] },
    customer_name: { type: String, required: [true, 'Please enter Value.'] },
    application_no: { type: String, required: [true, 'Please enter Value.'] },
    pro_purchaser_name: { type: String, required: [true, 'Please enter Value.'] },
    person_met: { type: String, required: [true, 'Please enter Value.'] },
    address_of_property: { type: String, required: [true, 'Please enter Value.'] },
    address_as_document: { type: String, required: [true, 'Please enter Value.'] },
    nearby_landmark: { type: String, required: [true, 'Please enter Value.'] },
    comment_on_property: { type: String, required: [true, 'Please enter Value.'] },
    approved_layout_plan: { type: String, required: [true, 'Please enter Value.'] },
    layout_date_num: { type: String, required: [true, 'Please enter Value.'] },
    layout_authority: { type: String, required: [true, 'Please enter Value.'] },
    approved_building_plan: { type: String, required: [true, 'Please enter Value.'] },
    building_date_num: { type: String, required: [true, 'Please enter Value.'] },
    building_authority: { type: String, required: [true, 'Please enter Value.'] },
    construction_per: { type: String, required: [true, 'Please enter Value.'] },
    construction_date_num: { type: String, required: [true, 'Please enter Value.'] },
    construction_authority: { type: String, required: [true, 'Please enter Value.'] },
    bu_permission: { type: String, required: [true, 'Please enter Value.'] },
    bu_date_num: { type: String, required: [true, 'Please enter Value.'] },
    bu_authority: { type: String, required: [true, 'Please enter Value.'] },
    usage_as_plan: { type: String, required: [true, 'Please enter Value.'] },
    type_of_usage: { type: String, required: [true, 'Please enter Value.'] },
    document_list: { type: String, required: [true, 'Please enter Value.'] },
    status_of_occupancy: { type: String, required: [true, 'Please enter Value.'] },
    occupied_by: { type: String, required: [true, 'Please enter Value.'] },
    relationship_with_customer: { type: String, required: [true, 'Please enter Value.'] },
    occupied_since: { type: String, required: [true, 'Please enter Value.'] },
    status_property: { type: String, required: [true, 'Please enter Value.'] },
    rental_value: { type: String, required: [true, 'Please enter Value.'] },
    north_doc: { type: String, required: [true, 'Please enter Value.'] },
    north_site: { type: String, required: [true, 'Please enter Value.'] },
    south_doc: { type: String, required: [true, 'Please enter Value.'] },
    south_site: { type: String, required: [true, 'Please enter Value.'] },
    east_doc: { type: String, required: [true, 'Please enter Value.'] },
    east_site: { type: String, required: [true, 'Please enter Value.'] },
    west_doc: { type: String, required: [true, 'Please enter Value.'] },
    west_site: { type: String, required: [true, 'Please enter Value.'] },
    boundaries_match: { type: String, required: [true, 'Please enter Value.'] },
    boundaries_remark: { type: String, required: [true, 'Please enter Value.'] },
    ploat_area: { type: String, required: [true, 'Please enter Value.'] },
    flat_demarcated_site: { type: String, required: [true, 'Please enter Value.'] },
    approved_use: { type: String, required: [true, 'Please enter Value.'] },
    Infrastructure_area: { type: String, required: [true, 'Please enter Value.'] },
    nature_of_locality: { type: String, required: [true, 'Please enter Value.'] },
    class_of_locality: { type: String, required: [true, 'Please enter Value.'] },
    distance_from_office: { type: String, required: [true, 'Please enter Value.'] },
    property_location: { type: String, required: [true, 'Please enter Value.'] },
    elec_service: { type: String, required: [true, 'Please enter Value.'] },
    property_type: { type: String, required: [true, 'Please enter Value.'] },
    property_structure: { type: String, required: [true, 'Please enter Value.'] },
    no_of_units: { type: String, required: [true, 'Please enter Value.'] },
    no_of_kitchen: { type: String, required: [true, 'Please enter Value.'] },
    no_of_bed: { type: String, required: [true, 'Please enter Value.'] },
    usage_remark: { type: String, required: [true, 'Please enter Value.'] },
    maintenance_level: { type: String, required: [true, 'Please enter Value.'] },
    structure: { type: String, required: [true, 'Please enter Value.'] },
    interiors: { type: String, required: [true, 'Please enter Value.'] },
    exteriors: { type: String, required: [true, 'Please enter Value.'] },
    age_of_property: { type: String, required: [true, 'Please enter Value.'] },
    amenities: { type: String, required: [true, 'Please enter Value.'] },
    land_as_plan_a: { type: String, required: [true, 'Please enter Value.'] },
    land_as_area_a: { type: String, required: [true, 'Please enter Value.'] },
    ground_as_plan_a: { type: String, required: [true, 'Please enter Value.'] },
    ground_as_area_a: { type: String, required: [true, 'Please enter Value.'] },
    first_as_plan_a: { type: String, required: [true, 'Please enter Value.'] },
    first_as_area_a: { type: String, required: [true, 'Please enter Value.'] },
    second_as_plan_a: { type: String, required: [true, 'Please enter Value.'] },
    second_as_area_a: { type: String, required: [true, 'Please enter Value.'] },
    rate_as_plan_a: { type: String, required: [true, 'Please enter Value.'] },
    rate_as_area_a: { type: String, required: [true, 'Please enter Value.'] },
    rate_adopted_a: { type: String, required: [true, 'Please enter Value.'] },
    cost_construction_a: { type: String, required: [true, 'Please enter Value.'] },
    land_value_a: { type: String, required: [true, 'Please enter Value.'] },
    building_value_a: { type: String, required: [true, 'Please enter Value.'] },
    depreciation_considered_a: { type: String, required: [true, 'Please enter Value.'] },
    fair_market_value_a: { type: String, required: [true, 'Please enter Value.'] },
    land_as_plan_b: { type: String, required: [true, 'Please enter Value.'] },
    land_as_area_b: { type: String, required: [true, 'Please enter Value.'] },
    carpet_as_plan_b: { type: String, required: [true, 'Please enter Value.'] },
    carpet_as_area_b: { type: String, required: [true, 'Please enter Value.'] },
    area_detail_as_plan: { type: String, required: [true, 'Please enter Value.'] },
    area_detail_as_area: { type: String, required: [true, 'Please enter Value.'] },
    prevailing_rate: { type: String, required: [true, 'Please enter Value.'] },
    total_value: { type: String, required: [true, 'Please enter Value.'] },
    amenities_cost: { type: String, required: [true, 'Please enter Value.'] },
    depreciation_building: { type: String, required: [true, 'Please enter Value.'] },
    total_fair_value: { type: String, required: [true, 'Please enter Value.'] },
    say: { type: String, required: [true, 'Please enter Value.'] },
    remarks: { type: String, required: [true, 'Please enter Value.'] },
    plot_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    plot_area_site: { type: String, required: [true, 'Please enter Value.'] },
    plot_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    no_of_flore_plan: { type: String, required: [true, 'Please enter Value.'] },
    no_of_flore_site: { type: String, required: [true, 'Please enter Value.'] },
    no_of_flore_deviation: { type: String, required: [true, 'Please enter Value.'] },
    units_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    units_area_site: { type: String, required: [true, 'Please enter Value.'] },
    units_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    built_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    built_area_site: { type: String, required: [true, 'Please enter Value.'] },
    built_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    ground_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    ground_area_site: { type: String, required: [true, 'Please enter Value.'] },
    ground_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    first_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    first_area_site: { type: String, required: [true, 'Please enter Value.'] },
    first_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    fsi_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    fsi_area_site: { type: String, required: [true, 'Please enter Value.'] },
    fsi_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    coverage_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    coverage_area_site: { type: String, required: [true, 'Please enter Value.'] },
    coverage_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    setbacks_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    setbacks_area_site: { type: String, required: [true, 'Please enter Value.'] },
    setbacks_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    front_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    front_area_site: { type: String, required: [true, 'Please enter Value.'] },
    front_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    rear_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    rear_area_site: { type: String, required: [true, 'Please enter Value.'] },
    rear_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    left_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    left_area_site: { type: String, required: [true, 'Please enter Value.'] },
    left_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    right_area_plan: { type: String, required: [true, 'Please enter Value.'] },
    right_area_site: { type: String, required: [true, 'Please enter Value.'] },
    right_area_deviation: { type: String, required: [true, 'Please enter Value.'] },
    images: { type: String, required: [true, 'Please enter Value.'] },
    link: { type: String, required: [true, 'Please enter Value.'] },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now }



})
module.exports = mongoose.model('vreportlap', vReportLap)
