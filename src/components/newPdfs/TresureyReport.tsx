import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  MenuItem,
  IconButton,
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Color scheme for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

// Validation Schema
const validationSchema = Yup.object().shape({
  executiveSummary: Yup.object().shape({
    totalPortfolio: Yup.number().required("Required"),
    cashBalances: Yup.number().required("Required"),
    maturityProfile: Yup.object().shape({
      over5Years: Yup.number().required("Required"),
      threeTo5Years: Yup.number().required("Required"),
      oneTo3Years: Yup.number().required("Required"),
      under1Year: Yup.number().required("Required"),
    }),
    portfolioComposition: Yup.object().shape({
      fgnSecurities: Yup.number().required("Required"),
      dfiEurobonds: Yup.number().required("Required"),
      fixedDeposits: Yup.number().required("Required"),
    }),
  }),
  performanceMetrics: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      value: Yup.number().required("Required"),
    }),
  ),
  markToMarket: Yup.array().of(
    Yup.object().shape({
      security: Yup.string().required("Required"),
      faceValue: Yup.number().required("Required"),
      marketValue: Yup.number().required("Required"),
      gainLoss: Yup.number().required("Required"),
      gainLossPercent: Yup.number().required("Required"),
    }),
  ),
});

const TreasuryReport = () => {
  // Initial form values
  const initialValues = {
    executiveSummary: {
      totalPortfolio: 309000000000,
      cashBalances: 2370000000,
      maturityProfile: {
        over5Years: 41,
        threeTo5Years: 20,
        oneTo3Years: 27,
        under1Year: 12,
      },
      portfolioComposition: {
        fgnSecurities: 81,
        dfiEurobonds: 8,
        fixedDeposits: 11,
      },
      currencyExposure: 93,
    },
    performanceMetrics: [
      { name: "Fixed deposit", value: 12.15 },
      { name: "Treasury Bills", value: 18.29 },
      { name: "FGN Bonds", value: 12.6 },
      { name: "Short term Eurobonds", value: 7.98 },
      { name: "All short term investments", value: 9.43 },
      { name: "Long term Eurobonds", value: 7.88 },
      { name: "All Eurobond Investments", value: 7.97 },
      { name: "USD denominated investments", value: 7.83 },
      { name: "Total investment portfolio", value: 8.53 },
    ],
    markToMarket: [
      {
        security: "Cash and bank balance",
        faceValue: 2374390,
        marketValue: 2374390,
        gainLoss: 0,
        gainLossPercent: 0,
      },
      {
        security: "Fixed deposit",
        faceValue: 30905146,
        marketValue: 31227342,
        gainLoss: 322196,
        gainLossPercent: 1,
      },
      {
        security: "Treasury BIL",
        faceValue: 4007063,
        marketValue: 4221738,
        gainLoss: 214675,
        gainLossPercent: 5,
      },
      {
        security: "FGN bonds",
        faceValue: 3954306,
        marketValue: 3404930,
        gainLoss: -549376,
        gainLossPercent: -14,
      },
      {
        security: "FGN Eurobonds",
        faceValue: 244605944,
        marketValue: 223565388,
        gainLoss: -21040556,
        gainLossPercent: -9,
      },
      {
        security: "DFI Eurobonds",
        faceValue: 25460780,
        marketValue: 24951564,
        gainLoss: -509216,
        gainLossPercent: -2,
      },
    ],
    cashFlowForecast: {
      baseCase: {
        potentialCalls: [
          { name: "Viathan", amount: 1218000000 },
          { name: "TSL", amount: 1234000000 },
          { name: "GPC", amount: 1361000000 },
          { name: "Asiko", amount: 650000000 },
          { name: "VI Power", amount: 775000000 },
        ],
        closingBalance: 33132000000,
      },
      worstCase: {
        potentialDefaults: [
          { name: "Viathan 1 & 2", amount: 1218000000 },
          { name: "TSL 1-3", amount: 1234000000 },
          { name: "GPC", amount: 1361000000 },
          { name: "Asiko", amount: 650000000 },
          { name: "VI Power", amount: 775000000 },
          { name: "Coleman", amount: 630000000 },
          { name: "Abuja Steel", amount: 115000000 },
          { name: "Me Cure", amount: 5004000000 },
          { name: "ACOB", amount: 5000000 },
        ],
        closingBalance: 1462000000,
      },
    },
  };

  // Format large numbers for display
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        InfraCredit Treasury Report (September 2024)
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Submitted values:", values);
          alert("Report saved successfully!");
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            {/* Executive Summary */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                1. Investment Portfolio Overview
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Field name="executiveSummary.totalPortfolio">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="Total Portfolio Value (NGN)"
                        fullWidth
                        type="number"
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                        InputProps={{
                          startAdornment: "₦",
                          readOnly: true,
                        }}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field name="executiveSummary.cashBalances">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="Cash Balances (NGN)"
                        fullWidth
                        type="number"
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                        InputProps={{
                          startAdornment: "₦",
                          readOnly: true,
                        }}
                      />
                    )}
                  </Field>
                </Grid>
              </Grid>

              {/* Maturity Profile Chart */}
              <Typography variant="h6" sx={{ mt: 3 }}>
                Maturity Profile (%)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[
                    {
                      name: ">5 years",
                      value: values.executiveSummary.maturityProfile.over5Years,
                    },
                    {
                      name: "3-5 years",
                      value:
                        values.executiveSummary.maturityProfile.threeTo5Years,
                    },
                    {
                      name: "1-3 years",
                      value:
                        values.executiveSummary.maturityProfile.oneTo3Years,
                    },
                    {
                      name: "<1 year",
                      value: values.executiveSummary.maturityProfile.under1Year,
                    },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="value" fill="#8884d8" name="Percentage">
                    {[0, 1, 2, 3].map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* Portfolio Composition Chart */}
              <Typography variant="h6" sx={{ mt: 3 }}>
                Portfolio Composition (%)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      {
                        name: "FGN Securities",
                        value:
                          values.executiveSummary.portfolioComposition
                            .fgnSecurities,
                      },
                      {
                        name: "DFI Eurobonds",
                        value:
                          values.executiveSummary.portfolioComposition
                            .dfiEurobonds,
                      },
                      {
                        name: "Fixed Deposits",
                        value:
                          values.executiveSummary.portfolioComposition
                            .fixedDeposits,
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {[0, 1, 2].map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>

            {/* Performance Metrics */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                2. Performance Metrics
              </Typography>

              <Typography variant="h6">Weighted Average Yield (%)</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Investment Type</TableCell>
                      <TableCell align="right">Yield (%)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <FieldArray name="performanceMetrics">
                      {({ push, remove }) => (
                        <>
                          {values.performanceMetrics.map((metric, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <Field
                                  name={`performanceMetrics.${index}.name`}
                                >
                                  {({ field }) => (
                                    <TextField
                                      {...field}
                                      fullWidth
                                      variant="standard"
                                      error={
                                        touched.performanceMetrics?.[index]
                                          ?.name &&
                                        !!errors.performanceMetrics?.[index]
                                          ?.name
                                      }
                                      helperText={
                                        touched.performanceMetrics?.[index]
                                          ?.name &&
                                        errors.performanceMetrics?.[index]?.name
                                      }
                                    />
                                  )}
                                </Field>
                              </TableCell>
                              <TableCell align="right">
                                <Field
                                  name={`performanceMetrics.${index}.value`}
                                >
                                  {({ field }) => (
                                    <TextField
                                      {...field}
                                      type="number"
                                      variant="standard"
                                      InputProps={{ endAdornment: "%" }}
                                      error={
                                        touched.performanceMetrics?.[index]
                                          ?.value &&
                                        !!errors.performanceMetrics?.[index]
                                          ?.value
                                      }
                                      helperText={
                                        touched.performanceMetrics?.[index]
                                          ?.value &&
                                        errors.performanceMetrics?.[index]
                                          ?.value
                                      }
                                    />
                                  )}
                                </Field>
                              </TableCell>
                            </TableRow>
                          ))}
                        </>
                      )}
                    </FieldArray>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            {/* Mark-to-Market Report */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                3. Mark-to-Market Report
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Investment Security</TableCell>
                      <TableCell align="right">Face Value (₦)</TableCell>
                      <TableCell align="right">Market Value (₦)</TableCell>
                      <TableCell align="right">Gain/(Loss) (₦)</TableCell>
                      <TableCell align="right">Gain/(Loss) %</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <FieldArray name="markToMarket">
                      {({ push, remove }) => (
                        <>
                          {values.markToMarket.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <Field name={`markToMarket.${index}.security`}>
                                  {({ field }) => (
                                    <TextField
                                      {...field}
                                      fullWidth
                                      variant="standard"
                                      error={
                                        touched.markToMarket?.[index]
                                          ?.security &&
                                        !!errors.markToMarket?.[index]?.security
                                      }
                                      helperText={
                                        touched.markToMarket?.[index]
                                          ?.security &&
                                        errors.markToMarket?.[index]?.security
                                      }
                                    />
                                  )}
                                </Field>
                              </TableCell>
                              <TableCell align="right">
                                <Field name={`markToMarket.${index}.faceValue`}>
                                  {({ field }) => (
                                    <TextField
                                      {...field}
                                      type="number"
                                      variant="standard"
                                      InputProps={{ startAdornment: "₦" }}
                                      error={
                                        touched.markToMarket?.[index]
                                          ?.faceValue &&
                                        !!errors.markToMarket?.[index]
                                          ?.faceValue
                                      }
                                      helperText={
                                        touched.markToMarket?.[index]
                                          ?.faceValue &&
                                        errors.markToMarket?.[index]?.faceValue
                                      }
                                    />
                                  )}
                                </Field>
                              </TableCell>
                              <TableCell align="right">
                                <Field
                                  name={`markToMarket.${index}.marketValue`}
                                >
                                  {({ field }) => (
                                    <TextField
                                      {...field}
                                      type="number"
                                      variant="standard"
                                      InputProps={{ startAdornment: "₦" }}
                                      error={
                                        touched.markToMarket?.[index]
                                          ?.marketValue &&
                                        !!errors.markToMarket?.[index]
                                          ?.marketValue
                                      }
                                      helperText={
                                        touched.markToMarket?.[index]
                                          ?.marketValue &&
                                        errors.markToMarket?.[index]
                                          ?.marketValue
                                      }
                                    />
                                  )}
                                </Field>
                              </TableCell>
                              <TableCell align="right">
                                <Field name={`markToMarket.${index}.gainLoss`}>
                                  {({ field }) => (
                                    <TextField
                                      {...field}
                                      type="number"
                                      variant="standard"
                                      InputProps={{ startAdornment: "₦" }}
                                      error={
                                        touched.markToMarket?.[index]
                                          ?.gainLoss &&
                                        !!errors.markToMarket?.[index]?.gainLoss
                                      }
                                      helperText={
                                        touched.markToMarket?.[index]
                                          ?.gainLoss &&
                                        errors.markToMarket?.[index]?.gainLoss
                                      }
                                    />
                                  )}
                                </Field>
                              </TableCell>
                              <TableCell align="right">
                                <Field
                                  name={`markToMarket.${index}.gainLossPercent`}
                                >
                                  {({ field }) => (
                                    <TextField
                                      {...field}
                                      type="number"
                                      variant="standard"
                                      InputProps={{ endAdornment: "%" }}
                                      error={
                                        touched.markToMarket?.[index]
                                          ?.gainLossPercent &&
                                        !!errors.markToMarket?.[index]
                                          ?.gainLossPercent
                                      }
                                      helperText={
                                        touched.markToMarket?.[index]
                                          ?.gainLossPercent &&
                                        errors.markToMarket?.[index]
                                          ?.gainLossPercent
                                      }
                                    />
                                  )}
                                </Field>
                              </TableCell>
                            </TableRow>
                          ))}
                        </>
                      )}
                    </FieldArray>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            {/* Cash Flow Forecast */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                4. Cash Flow Forecast
              </Typography>

              <Typography variant="h6">Base Case Scenario</Typography>
              <Typography>Potential Calls:</Typography>
              <FieldArray name="cashFlowForecast.baseCase.potentialCalls">
                {({ push, remove }) => (
                  <Box>
                    {values.cashFlowForecast.baseCase.potentialCalls.map(
                      (call, index) => (
                        <Grid
                          container
                          spacing={2}
                          key={index}
                          alignItems="center"
                        >
                          <Grid item xs={5}>
                            <Field
                              name={`cashFlowForecast.baseCase.potentialCalls.${index}.name`}
                            >
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  label="Company"
                                  fullWidth
                                  variant="standard"
                                />
                              )}
                            </Field>
                          </Grid>
                          <Grid item xs={5}>
                            <Field
                              name={`cashFlowForecast.baseCase.potentialCalls.${index}.amount`}
                            >
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  label="Amount (NGN)"
                                  fullWidth
                                  type="number"
                                  variant="standard"
                                  InputProps={{ startAdornment: "₦" }}
                                />
                              )}
                            </Field>
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton onClick={() => remove(index)}>
                              <RemoveCircleOutline color="error" />
                            </IconButton>
                          </Grid>
                        </Grid>
                      ),
                    )}
                    <Button
                      startIcon={<AddCircleOutline />}
                      onClick={() => push({ name: "", amount: 0 })}
                      sx={{ mt: 1 }}
                    >
                      Add Potential Call
                    </Button>
                  </Box>
                )}
              </FieldArray>

              <Typography variant="h6" sx={{ mt: 3 }}>
                Worst Case Scenario
              </Typography>
              <Typography>Potential Defaults:</Typography>
              <FieldArray name="cashFlowForecast.worstCase.potentialDefaults">
                {({ push, remove }) => (
                  <Box>
                    {values.cashFlowForecast.worstCase.potentialDefaults.map(
                      (defaultItem, index) => (
                        <Grid
                          container
                          spacing={2}
                          key={index}
                          alignItems="center"
                        >
                          <Grid item xs={5}>
                            <Field
                              name={`cashFlowForecast.worstCase.potentialDefaults.${index}.name`}
                            >
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  label="Company"
                                  fullWidth
                                  variant="standard"
                                />
                              )}
                            </Field>
                          </Grid>
                          <Grid item xs={5}>
                            <Field
                              name={`cashFlowForecast.worstCase.potentialDefaults.${index}.amount`}
                            >
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  label="Amount (NGN)"
                                  fullWidth
                                  type="number"
                                  variant="standard"
                                  InputProps={{ startAdornment: "₦" }}
                                />
                              )}
                            </Field>
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton onClick={() => remove(index)}>
                              <RemoveCircleOutline color="error" />
                            </IconButton>
                          </Grid>
                        </Grid>
                      ),
                    )}
                    <Button
                      startIcon={<AddCircleOutline />}
                      onClick={() => push({ name: "", amount: 0 })}
                      sx={{ mt: 1 }}
                    >
                      Add Potential Default
                    </Button>
                  </Box>
                )}
              </FieldArray>
            </Paper>

            {/* Submit Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button type="submit" variant="contained" size="large">
                Save Report
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default TreasuryReport;
